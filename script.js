// 1. Select your contact tab element
const contactTab = document.getElementById('contactTab');

// 2. Define your WhatsApp details
const phoneNumber = "8434901026"; // International format, no '+' or spaces
const message = encodeURIComponent("Hello, I'm reaching out from your website!");

// 3. Add the click event listener
contactTab.addEventListener('click', function() {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
})