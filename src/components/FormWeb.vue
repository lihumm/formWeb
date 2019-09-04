<template>
  <div>
    <div class="top">
      <img src="@/assets/top.jpg" alt />
      <h3>限18-65周岁申请</h3>
    </div>
    <div class="form">
        <iframe scrolling:no src="http://gdaib-lihum.mikecrm.com/hfkzP47"></iframe>
    </div>
    <div class="contain">
        <img src="@/assets/contain.jpg">
    </div>

    <div class="footer">
      <p>根据审核结果不同，贷款额度不同</p>
      <p>贷款有风险，请根据个人还款能力合理借贷，避免逾期</p>
      <p>资金来源：十家银行等正规金融机构</p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
.top img {
  width: 100%;
  height: 100%;
}
.top h3{
    text-align: center
}
iframe{
  border:none;
    width:100%;
    height: 465px;
}
.contain img{
width: 100%;
  height: 100%;
}
.footer{
  text-align: center;
  color:rgba(163, 156, 156, 1);
      /* font-size: .375rem; */
      font-size: 14px;
}
</style>