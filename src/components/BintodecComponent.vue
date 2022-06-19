<template>
	<div class="bar">
		<div class="title">
			<h1>Enter a binary number</h1>
		</div>
		<div>
			<div>
				<input id="str" type="text">	
			</div>
			<div>
				<button id="btn" type="submit" @click.prevent="toArray"> =Convert it</button>
			</div>
			<div>
				<textarea v-model="dec" id="saida" rows="4" readonly cols="40"></textarea>
			</div>
		</div>
	</div>
			
</template>

<script>
export default {
	data(){
			return {
					arr: [],
					dec: '',
					val: ''
			}
	},
	methods: {
			toArray(){
					let str = document.getElementById('str').value;
					var myArr = String(str).split("").map((str)=>{
							return Number(str)
					})

					this.arr = myArr;
					for(let n = 0; n < myArr.length; n++){
							let decimal = 0;
							for(let i = 0; i < this.arr.length; i++){
									decimal = decimal + (this.arr[i]*(2**(this.arr.length-i-1)))
							}					
								this.dec = decimal
					}

		}
	}
}
</script>

<style scoped>
.bar{
	text-align: center;
}
#str{
	margin: 5px;
}
#btn{
	margin: 5px;
	color: #fff;
	background-color: #28a745;
  border-color: #28a745;
	border-radius: 3px
}
#saida{
	margin: 5px;
	background-color: #e9ecef;
}
.title{
	margin: 30px
}
</style>