// ===============================
// Promise Chaining & Error Handling — Interview Notes & Recap
// ===============================

// --- What is Promise Chaining? ---
// Promise chaining is the process of linking multiple asynchronous operations together,
// where each operation starts when the previous one completes.
// Each .then() returns a new promise, allowing sequential execution of async tasks.

// --- Example: E-commerce Order Flow ---
// This code simulates an e-commerce checkout process using promises for each async step:
// 1. Create order
// 2. Proceed to payment
// 3. Show order summary
// 4. Update wallet

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function(orderID){
    console.log("Order ID:", orderID);
    return proceddtoPayemnt(orderID); // Step 2: Payment
})
.then(function(paymentStatus){
    console.log("Payment:", paymentStatus);
    return showOrderSummary(paymentStatus); // Step 3: Order Summary
})
.then(function(orderSummary){
    console.log("Order Summary:", orderSummary);
    return updateWallet(orderSummary); // Step 4: Update Wallet   

})
.then(function(walletUpdate){
    console.log("Wallet Update:", walletUpdate);
})
.catch(function(err){
    // Handles any error in the chain above
    console.log(err.message);
})
.then(function(){
    // This .then() runs no matter what (after .catch())
    console.log("no matter what happens, I will definitely be called");
});

// --- Producer Functions ---
// Each function returns a Promise that resolves to a value for the next step.

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // Simulate cart validation and order creation
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderID = "12113232";
        if(orderID){
            setTimeout(function(){
                resolve(orderID); // Simulate async order creation
            }, 5000);
        }
    });
    return pr;
}

function validateCart(cart){
    return true; // Always valid for this example
}

function proceddtoPayemnt(orderID){
    return new Promise(function(resolve, reject){
        resolve("payemtn succesful");
    });
}

function showOrderSummary(orderID){
    return new Promise(function(resolve, reject){
        resolve("order summary is generated");
    });
}

function updateWallet(orderID){
    return new Promise(function(resolve, reject){
        resolve("Updated wallet : 15000");
    });
}

// --- Key Interview Points ---
// - Promise chaining allows you to run async operations in sequence, passing results down the chain.
// - .catch() handles errors from any previous promise in the chain.
// - The final .then() runs regardless of success or failure (like finally).
// - Each step should return a promise for proper chaining.
// - This pattern is much cleaner and more maintainable than deeply nested callbacks (callback hell).
// - Be able to explain and implement promise chains, error handling, and real-world async flows in