<template>
  <transition name="modal" appear>
    <div class="modal__overlay" @click.self="$emit('close')">
      <div class="modal__window">
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>


<style scoped>
  .modal__overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
     background-color: rgba(0,0,0,0.74);
  }

  /* .modal__window{
    min-width: 70vw;
    min-height: 300px;
    //height: 100%;
    //width: 100%;
    //height: 650px;
    //width: 520px;
    //padding-top: 50px;
    overflow: hidden;
  } */

  .modal__content{
    height: 100%;
    padding: 30px;
    text-align: center;
    overflow: scroll;
  }

  .modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}




</style>
