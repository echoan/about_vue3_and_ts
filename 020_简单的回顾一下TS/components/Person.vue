<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2023-10-21 21:13:56
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-05 12:54:05
-->
<template>
  <div class="person">
    <h3 v-for="(item, index) in personList" :key="item.id">{{ item.name }}</h3>
  </div>
</template>

<script lang="ts" setup name="Person">
// import {type PersonInter,type Persons} from '@/types'
import {type PersonInter,type Persons} from '../types'
let person:PersonInter = {id:'asyud7asfd01',name:'张三',age:60}
let personList:Persons = [
  {id:'asyud7asfd01',name:'张三',age:60},
  {id:'asyud7asfd02',name:'李四',age:18},
  {id:'asyud7asfd03',name:'王五',age:5}
]
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
</style>
