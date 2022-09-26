<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Counter</p>
                <p class="fst-italic">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="card shadow-large">
                    <div class="card-body text-center">
                        <p class="h3 display-3 text-center">{{counterState.count}}</p>
                        <button @click="increment()" class="btn btn-success m-1"> Increment</button>
                        <button @click="decrement()" class="btn btn-warning m-1"> Decrement</button>
                        <button @click="incrementBy(5)" class="btn btn-primary m-1"> Increment By</button>
                        <button @click="reset()" class="btn btn-danger m-1"> Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "CounterComponet",
    methods:{
        increment(){
            this.$store.dispatch('incrementCounter')
        },
        decrement(){
            this.$store.dispatch('decrementCounter')
        },
        incrementBy(value){
            this.$store.dispatch('incrementCounterBy',{value:value})
        },
        reset(){
            this.$store.dispatch('resetCounter')
        }
    },
    computed:
        mapGetters({
            counterState : "getCounterState",
        })
    
    
}
</script>