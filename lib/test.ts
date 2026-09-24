/**
 * Platform Refactoring Assessment Practice
 * Scenario: Order Management & Billing Service
 * 
 * ASSESSMENT INSTRUCTIONS:
 * 1. Time Limit: 45 minutes
 * 2. Objective: Refactor the legacy code below to eliminate code smells, 
 *    improve maintainability, enforce the Single Responsibility Principle, 
 *    and ensure all existing business logic remains intact.
 * 3. Constraints: Do not change public method signatures unless explicitly required.
 */

class LegacyOrderService {
  constructor() {
    this.db = {
      save: (order) => true,
      log: (msg) => console.log(`[LOG]: ${msg}`)
    };
  }

  processOrder(orderData, userType, region, isExpress) {
    // Code Smell: Primitive Obsession & Missing Validation
    if (!orderData || !orderData.items || orderData.items.length === 0) {
      throw new Error("Invalid order data");
    }

    let subtotal = 0;
    for (let i = 0; i < orderData.items.length; i++) {
      const item = orderData.items[i];

      // Code Smell: Magic Numbers & Duplicated Calculations
      if (item.price < 0 || item.qty < 0) {
        throw new Error("Negative values not allowed");
      }
      subtotal += item.price * item.qty;
    }

    let discount = 0;
    // Code Smell: Complex Conditional / Nested Branching (Magic Strings & Numbers)
    if (userType === 'VIP') {
      if (subtotal > 500) {
        discount = subtotal * 0.20;
      } else {
        discount = subtotal * 0.15;
      }
    } else if (userType === 'REGULAR') {
      if (subtotal > 1000) {
        discount = subtotal * 0.10;
      } else {
        discount = 0.05 * subtotal;
      }
    } else if (userType === 'GUEST') {
      discount = 0;
    } else {
      discount = 0;
    }

    const discountedTotal = subtotal - discount;

    let shipping = 0;
    // Code Smell: Tight Coupling & Hardcoded Rules
    if (region === 'DOMESTIC') {
      if (isExpress) {
        shipping = 25.00;
      } else {
        shipping = 10.00;
      }
    } else if (region === 'INTERNATIONAL') {
      if (isExpress) {
        shipping = 75.00;
      } else {
        shipping = 40.00;
      }
      if (discountedTotal > 2000) {
        shipping = shipping * 0.5; // 50% off international shipping for large orders
      }
    } else {
      shipping = 50.00; // Default flat rate
    }

    let tax = 0;
    // Code Smell: Duplicate Region Checks & Tax Logic
    if (region === 'DOMESTIC') {
      tax = discountedTotal * 0.08;
    } else if (region === 'INTERNATIONAL') {
      tax = discountedTotal * 0.15;
    } else {
      tax = discountedTotal * 0.10;
    }

    const finalTotal = discountedTotal + shipping + tax;

    const result = {
      orderId: Math.random().toString(36).substring(7),
      subtotal: subtotal,
      discount: discount,
      shipping: shipping,
      tax: tax,
      total: finalTotal,
      status: 'PROCESSED'
    };

    this.db.save(result);
    this.db.log(`Order processed successfully: ${result.orderId}`);

    return result;
  }
}

// ==========================================
// TEST HARNESS (Ensure these pass after refactoring)
// ==========================================

function runTests() {
  const service = new LegacyOrderService();

  // Test 1: VIP Domestic Order
  const order1 = {
    items: [
      { price: 300, qty: 2 },
      { price: 100, qty: 1 }
    ]
  };

  try {
    const res1 = service.processOrder(order1, 'VIP', 'DOMESTIC', false);
    console.assert(res1.subtotal === 700, "Test 1 Subtotal Failed");
    console.assert(res1.discount === 140, "Test 1 Discount Failed (20% of 700)");
    console.assert(res1.shipping === 10, "Test 1 Shipping Failed");
    console.log("Test 1 Passed!");
  } catch (e) {
    console.error("Test 1 Failed with error:", e.message);
  }

  // Test 2: Invalid Data Exception
  try {
    service.processOrder({ items: [] }, 'GUEST', 'DOMESTIC', false);
    console.error("Test 2 Failed: Expected error not thrown");
  } catch (e) {
    if (e.message === "Invalid order data") {
      console.log("Test 2 Passed!");
    } else {
      console.error("Test 2 Failed with unexpected error:", e.message);
    }
  }
}

// Uncomment to run test harness in your local environment
runTests();
