<!-- 計算價格組件 -->
<script>
export default {
    data() {
        return {
            count: 1,
            price: 90,
            totalPrice: 90,
        };
    },
    computed: {
    countPlus() {
    if (this.count < 10) {
        this.count++;
        this.totalPrice += this.price;
    } else if(this.count === 10) {
        this.count = 10;
        return alert('數量有限')
    }
    console.log(this.totalPrice)  
    },
    countMinus() {
    if (this.count > 1) {
        this.count--;
        this.totalPrice -= this.price;
    } else if(this.count === 1) {
        this.count = 1;
        return alert('已達到最低購買數量')
    }
    }
  }
};
</script>

<template>
    <div class="col-5 d-flex align-items-center w-25 ms-md-auto ms-3 ms-sm-5 me-sm-4 me-5">
        <button class="plus" @click="countPlus">+</button>
            <input class="my-quantity form-control-sm" type="number" placeholder="1" readonly v-model="count">
        <button class="minus" @click="countMinus">-</button>
    </div>
        <div class="col-1 ms-5">${{ totalPrice }}</div>
</template>