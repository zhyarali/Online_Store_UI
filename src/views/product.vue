<template>
    <div>

        <div class="container-fluid hero-section-product">
            <div class="row text-white text-center d-flex justify-content-center p-5" style="position: relative;">
                <h5 class="mb-2">Special Price</h5>
                <h1 class="title animate__animated animate__lightSpeedInRight mb-3 mt-2">30%</h1>
                <h4>Off</h4>

                <router-link to="/" class="btn btn-primary col-lg-2 mt-5 radius-10">Shop Now</router-link>
            </div>
        </div>

        <div class="container-sm " style="margin-top:70px;margin-bottom:100px">

            <div class="row mb-5">
                <h3>PRODUCTS</h3>
            </div>

            <div class="row">

                <div class="col-lg-3 filter-desktop">
                 <div class="dropdown ">
                        <button class="btn btn-primary radius-10 shadow-sm dropdown-toggle" type="button"
                            style="padding:18px 90px" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Filter
                        </button>
                        <ul class="dropdown-menu" style="width:235px;padding:30px"
                            aria-labelledby="dropdownMenuButton1">
                            <div>

                                <div class="brand">

                                    <h5 class="mb-3">Brand</h5>
                                    <div class="form-check form-check-block" v-for="(item, index) in brand"
                                        :key="index">
                                        <input class="form-check-input" type="checkbox" value="" id="check">
                                        <label class="form-check-label" for="check">
                                            {{ item }}
                                        </label>
                                    </div>

                                    <hr>
                                    <h5 class="mb-3">Size</h5>
                                    <div class="form-check form-check-block" v-for="(item, index) in size" :key="index+'1'">
                                        <input class="form-check-input" type="checkbox" value="" id="check">
                                        <label class="form-check-label" for="check">
                                            {{ item }}
                                        </label>
                                    </div>
                                    <hr>

                                    <h5 class="mb-3">Price</h5>
                                    <div class="form-check form-check-block" v-for="(item, index) in price"
                                        :key="index+'2'">
                                        <input class="form-check-input" type="checkbox" value="" id="check">
                                        <label class="form-check-label" for="check">
                                            {{ item }}
                                        </label>
                                    </div>

                                </div>

                            </div>
                        </ul>
                    </div> 
                </div>

                <div class="col-lg-8  text-dark">
                    <div class="product-header radius-10 bg-secondary p-3 d-flex justify-content-between flex-wrap">


                           <!-- filter for mobile -->
                        <div class="drop d-none">
                            <div class="dropdown ">
                                <button class="btn btn-primary radius-10 shadow-sm dropdown-toggle" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter
                                </button>
                                <ul class="dropdown-menu" style="width:235px;padding:30px"
                                    aria-labelledby="dropdownMenuButton1">
                                    <div>

                                        <div class="brand">

                                            <h5 class="mb-3">Brand</h5>
                                            <div class="form-check form-check-block" v-for="(item, index) in brand2"
                                                :key="index">
                                                <input class="form-check-input" type="checkbox" value="" id="check">
                                                <label class="form-check-label" for="check">
                                                    {{ item }}
                                                </label>
                                            </div>

                                            <hr>
                                            <h5 class="mb-3">Size</h5>
                                            <div class="form-check form-check-block" v-for="(item, index) in size2"
                                                :key="index+'1'">
                                                <input class="form-check-input" type="checkbox" value="" id="check">
                                                <label class="form-check-label" for="check">
                                                    {{ item }}
                                                </label>
                                            </div>
                                            <hr>

                                            <h5 class="mb-3">Price</h5>
                                            <div class="form-check form-check-block" v-for="(item, index) in price2"
                                                :key="index+'2'">
                                                <input class="form-check-input" type="checkbox" value="" id="check">
                                                <label class="form-check-label" for="check">
                                                    {{ item }}
                                                </label>
                                            </div>

                                        </div>

                                    </div>
                                </ul>
                            </div>
                        </div>

                          <!-- end filter for mobile -->

                        <div class="col-lg-6 col-md-6 d-flex">

                            <input class="form-control search_input radius-10 shadow-sm" style="width:380px;zoom:65%" type="text"
                                placeholder="Search">
                            <p></p>
                            <a href="#" class="mt-1" style="margin-left:10px"><i
                                    class="fas fa-search text-white"></i></a>

                        </div>

                        <div class="list-icon mt-1"><i class="fas fa-list text-white"></i></div>


                 

                    </div>


                    <div class="content d-flex justify-content-center flex-wrap ">


                        <router-link to="/detail_product" class="col-lg-4 col-md-4 col-7 m-4 text-dark"
                            v-for="(item, index) in items=6" :key="index" style="text-decoration:none">
                            <div class="card">
                                <img height="280"
                                    src="https://www.alphaindustries.eu/media/image/03/82/e7/178318-03-alpha-industries-back-print-hoody-sweat-002.jpg"
                                    class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Sample Product</h5>
                                    <h4 class="text-purple">$200.00</h4>
                                </div>
                            </div>
                        </router-link>


                    </div>

                </div>
            </div>
        </div>

    </div>
</template>



<script>
    export default {
        data() {
            return {
                brand: ['Chanel', 'Gap', 'Levis', 'Cardinal', 'Wrangler', 'Converse'],
                brand2: ['Chanel', 'Gap', 'Levis', 'Cardinal', 'Wrangler', 'Converse'],
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                size2: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                price: ['$0 - $100', '$100 - $300', '$300 - $500', '$500 - $1000'],
                price2: ['$0 - $100', '$100 - $300', '$300 - $500', '$500 - $1000']
            }
        },
    }
</script>