<template>
    <div class="container">

        <form action="" class=" mt-5 m-auto text-center" @submit.prevent="search">
            <center><Dropdown class="radius-10 " :options="options" :disabled="false"  :maxItem="10"
                placeholder="Search for item ..." >
            </Dropdown></center>
            <button type="submit" class="btn btn-primary btn-sm radius-10 shadow mt-4 ">Search</button>
        </form>

            <br><br>
        <hr>




    </div>
</template>


<script>
    import Dropdown from 'vue-simple-search-dropdown';

    export default {
        components: {
            Dropdown
        },
        methods:{
            search(){
                this.$router.push('/')
            }
        },
        data() {
            return {
                input_search:'em',
                options: [{
                        id: 1,
                        name: 't-shirt'
                    },
                    {
                        id: 2,
                        name: 'dress'
                    },
                    {
                        id: 3,
                        name: 'hat'
                    },
                    {
                        id: 4,
                        name: 'jean'
                    },
                    {
                        id: 5,
                        name: 'shoes black'
                    },
                    {
                        id: 6,
                        name: 'sexy dress'
                    },
                    {
                        id: 7,
                        name: 'acessories'
                    },
                ]
            }
        },
    }
</script>