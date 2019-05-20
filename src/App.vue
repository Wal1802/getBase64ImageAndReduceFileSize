<template lang="html">
  <div>
   
   <input id="inp" type='file' @change="onFileChange">
    <p id="b64"></p>
    <img id="img" height="150">
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      file:null,
    };
  },
  mounted() {
    debugger;
    //document.getElementById("inp").addEventListener("change", this.onFileChange);
  },
  methods: {
    onFileChange(e) {
      debugger;
      this.file = e.target.files[0];

      if(this.file!=null){
         var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
          debugger;
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
    }
  }
};
</script>

<style>
.text-color-yellow {
  color: yellow;
}
</style>
