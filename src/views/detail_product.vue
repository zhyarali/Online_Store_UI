<template>
    <div>
        <div class="container mt-5">
         

            <div class="row d-flex">
                <div class="col-lg-4 carousel-product col-md-5 col-10">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img  height="430" src="https://onpointfresh.com/wp-content/uploads/2016/08/tumblr_o2hadekN0v1uceufyo1_500.jpg"
                                    class="d-block w-100 radius-10" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img height="430" src="https://i.pinimg.com/originals/85/43/65/8543655e93728beb1c083cc000b391b5.jpg"
                                    class="d-block w-100 radius-10" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img height="430" src="https://i.pinimg.com/originals/65/db/f3/65dbf3f221dff1730a8e3f5e9beb8e7d.jpg"
                                    class="d-block w-100 radius-10" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="col-lg-8 carousel-detail" style="align-self:center;padding-left: 65px;">
                    <h5 class="mb-4 mt-4">Sample Product Design</h5>
                    <h6 class="text-light" style="font-weight:300;">Overview</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at eveniet ea eos iste vel corrupti
                        deleniti sequi, molestias esse facilis beatae magni voluptatem? Illo aliquid repellendus quaerat
                        pariatur aliquam.</p>
                    <h3>$200.00</h3>
                    <div class="row d-flex justify-content-around text-center mt-3 ">
                        <div class="quantity-toggle">
                            <button class="btn btn-dark btn-sm shadow-sm" @click="decrement()">&mdash;</button>
                            <input type="text" :value="quantity" readonly>
                            <button class="btn btn-dark btn-sm shadow-sm" @click="increment()">&#xff0b;</button>
                        </div>
                    </div>

                    <button class="mt-5 addcart btn btn-outline-primary btn-sm radius-10 shadow"><i class="fas fa-shopping-cart"></i> ADD TO
                        CART</button>

                </div>


            </div>
            <hr class="mt-5 mb-5">

            
            <div class="row">
                <h3 class="mb-3">Detail Description</h3>
                <p style="text-align:justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque ut perferendis voluptas nihil aliquam similique iste ullam cupiditate expedita, rerum vitae repudiandae nesciunt quae quam nam sapiente porro unde? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iste beatae facere quo in praesentium velit aut reprehenderit quam ab. Ea molestiae placeat laborum non perferendis sed unde libero aliquid!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quis reiciendis eius repellendus obcaecati. Odit, temporibus nam. Provident voluptatum officia dolorem a enim nihil animi, est quam praesentium, quod voluptates!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum suscipit necessitatibus officiis repellendus voluptatum nemo cumque nisi sunt natus, reprehenderit, unde deserunt, voluptate repudiandae praesentium quidem ipsam sit sapiente soluta.
                </p>
            </div>

        </div>
            <hr class="mt-5 mb-4">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 1
            }
        },
        methods: {
            increment() {
                this.quantity++
            },
            decrement() {
                if (this.quantity === 1) {
                    alert('Negative quantity not allowed')
                } else {
                    this.quantity--
                }
            }
        }
    }
</script>


<style>
    pre {
        background: #eee;
        padding: 1rem;
        border-radius: 5px;
    }


    .quantity-toggle {
        display: flex;
    }

    .quantity-toggle input {
        border: 0;
        border-top: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        width: 2.5rem;
        text-align: center;
        padding: 0 0.5rem;
    }

    .quantity-toggle sbutton {
        border: 2px solid #ddd;
        padding: 0.5rem;
        background: #f5f5f5;
        color: #888;
        font-size: 1rem;
        cursor: pointer;
    }
</style>