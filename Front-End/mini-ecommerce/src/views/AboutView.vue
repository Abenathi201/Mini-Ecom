<template>
      <div class="container">
        <hr>
        <h6 class="display-6 text-center overflow-hidden">About Insane Footwear</h6>
        <hr>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
                <p class="fs-6">Thank you for your interest in Insane Footwear. Our headquarters is located in Crossroads, Cape Town, and we're now celebrating over 5 years of great customer service. We're a family run business, which started as one store founded by Inam Nkabi, but has grown to 2 locations along with our online store. We pride ourselves on making people happy.</p>
                <p class="fs-6">Why should you shop with us? In addition to our great customer service, we carry what we feel are the best products in footwear today. If it's uncomfortable, we simply don't sell it. You'll also talk to real people when you call in. Each staff member is trained, friendly and solution-oriented. In addition to comfort, we focus on remedying common problems in the feet and legs. (Check out our great selection on these types of products, and feel free to ask us what style we recommend just for you.)</p>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <h6 class="fs-4 text-center fw-bold">Any questions? Let's get in touch</h6>
                <form
  action="https://formspree.io/f/xayzrnye"
  method="POST"
>

    <div class="mb-3 contact">
        <input class="overflow-x-hidden" type="text" name="fullName">
        <span>Your Full Name</span>
      </div>
    <div class="mb-3 contact">
      <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp">
      <span>Email Address</span>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 contact">
        <textarea class="overflow-x-hidden" name="" id="message"></textarea>
        <span>Your Message here...</span>
    </div>
    <button type="submit" class="bg-black text-white px-2 border-0">Submit</button>
</form>
            </div>
        </div>
    </div>
</template>
<style scoped>
  .container {
    font-family: montserrat;
  }
  .contact input {
    width: 100% !important;
    padding: 5px 0 !important;
    font-size: 15px !important;
    margin: 10px 0;
    border: none !important;
    border-bottom: 2px solid black !important;
    outline: none;
    border-radius: 0;
    resize: none;
}
.contact textarea {
    width: 100% !important;
    padding: 5px 0 !important;
    font-size: 15px !important;
    margin: 10px 0;
    border: none !important;
    border-bottom: 2px solid black !important;
    outline: none;
    resize: none;
}
.contact span {
    position: relative ;
    left: 0;
    padding: 5px 0 !important;
    font-size: 15px !important;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;  
}
#message {
    min-height: 1px !important;
}
</style>
