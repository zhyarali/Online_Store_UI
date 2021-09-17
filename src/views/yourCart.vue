<template>
    <div>
        <div class="container mt-5">


        <!-- desktop -->

            <div class="d-flex justify-content-between p-2 mb-3 cart-header">
                <div>
                    <p>{{ selected.length}} row(s) Selected</p>
                </div>
                <div><button class="btn btn-primary radius-10 shadow btn-sm " @click="delete_item()">Delete Selected
                        Product</button></div>
            </div>

            <div class="table-responsive cart-table ">
                <table class="table p-3 text-center table-bordered" style="overflow:hidden">
                    <thead>
                        <tr class="bg-light">
                            <th scope="col">PRODUCT NAME</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">QTY</th>
                            <th scope="col">TOTAL</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in product" :key="item.id">
                            <td scope="row" class="d-flex justify-content-around p-2">
                                <div class="form-check form-check-inline" style="align-self:center">
                                    <input class="form-check-input" type="checkbox" :value="item.id" v-model="selected">
                                </div>

                                <div class="image"><img width="120" class="radius-15 shadow" height="140"
                                        :src="item.image" alt=""></div>

                                <div class="detail col-lg-7" style="align-self:center">
                                    <p>{{item.name}}</p>
                                    <p>Color : {{item.color}}</p>
                                    <p>Size : {{item.size}}</p>
                                </div>
                            </td>

                            <td style="transform: translate(0px, 50px);">{{item.price}}</td>

                            <td style="border:none" class="d-flex justify-content-center">
                                <button @click="decrease(item.id)" class="btn btn-danger btn-sm radius-10 shadow"
                                    style="padding: 0px 7px !important;">-</button>
                                <div class="form-group col-lg-5 col-md-8 col-8" style="zoom:70%;padding: 0px 6px;">
                                    <input type="text" class="form-control radius-10 shadow-sm text-center"
                                        v-model="item.qty" name="" id="" aria-describedby="helpId" placeholder="">
                                </div>
                                <button @click="increase(item.id)" class="btn btn-primary btn-sm radius-10 shadow"
                                    style="padding: 0px 6px !important;">+</button>
                            </td>

                            <td style="transform: translate(0px, 50px);">{{item.total}}</td>
                            <td style="transform: translate(0px, 50px);"><a href="#" @click="delete_one(item.id)"
                                    class="text-danger"><i class="fas fa-trash"></i></a></td>

                        </tr>

                        <tr>
                            <td colspan="3" style="padding-top: 20px;">
                                <div class="d-flex  justify-content-between">
                                    <p>Product</p>
                                    <p>$600</p>
                                    <p>Shopping</p>
                                    <p>$600</p>
                                    <p>Total</p>
                                </div>

                            </td>
                            <td colspan="2" style="padding-top: 20px;">$ {{total}}</td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <div class="row d-flex justify-content-center text-center mt-3 cart-btn">
                <div class="col"><button class="btn radius-10 shadow-sm btn-outline-primary">Continue Shopping</button></div>
                <div class="col"><button class="btn radius-10 shadow-sm btn-primary">Check Out</button></div>
            </div>

            <!-- end desktop -->





        
             <!-- mobile -->
<div class="mobile-cart d-none">
                <div class="row mb-5">
                    <h4>Cart Order</h4>
                </div>

                <div class="col-12 mb-3" v-for="p in product" :key="p.id" style="display: flex;width: 100% !important;">

                    <div class="col-4 image"><img class="radius-10 shadow" width="80" :src="p.image" alt=""></div>


                 


                <div class="col-8 d-flex">

                <div class="d-flex flex-column flex-wrap" style="width:100%">

                       <div class="col-12 text d-block">
                        <div class="title d-flex " style="align-items:baseline">
                            <p style="width:100%">{{p.name}}</p>
                            <i  @click="delete_one(p.id)" class="fas fa-times" style="margin-left:18px"></i>
                        </div>
                    </div>

                    <div><p style="font-weight:bolder">{{p.total}}</p></div>
                    <div class="qty d-flex " style="zoom:70%">

                            
                         <button @click="decrease(p.id)"  class="btn btn-danger btn-sm radius-10 shadow" style="margin-right:5px">-</button>
                                <div class="form-group" style="zoom:70%">
                                    <input type="text" v-model="p.qty" class="form-control radius-10 shadow-sm text-center"
                                         name="" id="" aria-describedby="helpId" placeholder="">
                                </div>
                                <button @click="increase(p.id)"  class="btn btn-primary btn-sm radius-10 shadow" style="margin-left:5px">+</button>
                    </div>
                   </div> 
                 </div> 


                </div>



                 <hr class="mt-5">
                <div class="row d-flex justify-content-between col-12 m-auto">
                <div class="col-4 text-center">
                   <p>SHIPPING</p>
                   <p>$16.99</p>
                </div>

                <div class="col-4 text-center">
                   <p>ITEM</p>
                   <p>$9.9</p>
                </div>

                <div class="col-4 text-center">
                   <p>TOTAL</p>
                   <p>$69.99</p>
                </div>

                </div>
              <hr class="mb-5">

              <div class="row d-flex justify-content-center text-center mt-3 ">
                <div class="col"><button class="btn radius-10 shadow-sm btn-outline-primary" style="font-size:12px">Continue Shopping</button></div>
                <div class="col"><button class="btn radius-10 shadow-sm btn-primary" style="font-size:12px">Check Out</button></div>
            </div>

</div>
 <!-- end mobile -->
             

        </div>

         <hr class="mt-5 mb-4">

    </div>
</template>


<script>
    export default {

        data() {
            return {
                qty: 1,
                select_all: false,
                selected: [],
                total: 0,
                product: [{
                        id: 0,
                        name: 'product one',
                        color: 'Black',
                        size: 'L',
                        image: 'https://www.alphaindustries.eu/media/image/03/82/e7/178318-03-alpha-industries-back-print-hoody-sweat-002.jpg',
                        price: 200.00,
                        qty: 0,
                        total: 0
                    },
                    {
                        id: 1,
                        name: 'product Two',
                        color: 'Red',
                        size: 'XL',
                        image: 'https://www.alphaindustries.eu/media/image/03/82/e7/178318-03-alpha-industries-back-print-hoody-sweat-002.jpg',
                        price: 300.00,
                        qty: 0,
                        total: 0
                    }

                ]

            }
        },
        methods: {
            increase(id) {
                this.product[id].qty++

            },
            decrease(id) {
                if (this.product[id].qty >= 1) {
                    this.product[id].qty--
                }
            },
            delete_item() {
                for (const key in this.selected) {
                    this.product.splice(key)
                    this.selected.splice(key)
                }

            },
            delete_one(id) {
               this.product = this.product.filter((e)=>e.id !== id )
                this.selected.splice(id)
            }
        },
        beforeUpdate() {
            for (const key in this.product) {
                this.product[key].total = this.product[key].qty * this.product[key].price
            }

               for (const key in this.product) {
                this.total += this.product[key].total
            }


        },
    }
</script>