<template>
  <div class="dawnofdesign">
    <h2>Dawn Of “Design”</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";
#about{
  .dawnofdesign{
    padding: 8% 0;
    text-align: center;
    h2{
      @include text-titleBig;
      color: $color-bgLight0;
      letter-spacing: 2px;
      font-family: futura;
      margin-bottom: $margin-1;
    }
    p{}
  }
}
@media screen and (max-width: 640px){
  #about{
  .dawnofdesign{
    h2{
      @include text-titleNormal;
      letter-spacing: 1px;
    }
    p{}
  }
}

}

</style>
