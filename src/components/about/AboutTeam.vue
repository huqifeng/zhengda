<template>
  <div class="contentBox">
    <TwoHeaderTitle :op="op"></TwoHeaderTitle>
    <p class="titleBox">
      <span class="leftCn">董事会</span>
      <span class="rightEn">BOARD OF DIRECTORS</span>
    </p>
    <div class="imgTextBox" v-for="(item,index) in dongshihui" :key="index">
      <p class="title">{{item.title}}</p>
      <div class="imgTextContent">
        <div class="imgWrap">
          <div class="imgBox">
            <img :src="item.imgUrl" :class="[index!=0?'nan':'']" alt />
          </div>
        </div>
        {{item.text}}
      </div>
    </div>
    <p class="titleBox">
      <span class="leftCn">高级管理人员</span>
      <span class="rightEn">SENIOR MANAGER</span>
    </p>
    <div class="textBox" v-for="(item,index) in guanli" :key="index">
      <p class="textName">{{item.name}}</p>
      <p class="textContent">{{item.text}}</p>
    </div>
  </div>
</template>
<script>
import TwoHeaderTitle from "../TwoHeaderTitle.vue";
export default {
  name: "aboutHonor",
  data() {
    return {
      dongshihui: [
        {
          title: "执行董事、主席：谢其润小姐",
          imgUrl: require("../../assets/dongshizhang2.png"),
          text:
            "现年26岁，本公司之董事会主席、执行董事以及执行董事委员会及提名委员会主席。谢小姐亦是正大天晴董事及北京泰德副董事长。谢小姐现任天津滨海泰达物流集团股份有限公司之非执行董事（该公司于联交所GEM上市）及Karolinska Development AB (publ)之董事（该公司于NASDAQ Stockholm Exchange上市）。彼拥有宾夕法尼亚大学沃顿商学院经济学系理学士学位。于修业期间，彼专攻财务及医疗管理。彼曾于多家公司之投资、财务及企业发展部门工作。作为新生代商界领袖，谢小姐获《福布斯》中文网评为「二零一八中国最杰出商界女性」之一。谢小姐为本公司执行董事及主要股东谢炳先生及郑翔玲女士之女儿，亦为谢炘先生（本公司执行董事）之堂侄女、谢辉女士之侄女、谢瑗小姐之堂侄女及谢炫先生之堂侄女（彼等均为本公司高级管理人员）。"
        },
        {
          title: "首席执行长：谢炳先生",
          imgUrl: require("../../assets/dongshizhang.png"),
          text:
            "现年67岁，为本公司创始主席，现任本公司首席执行长，负责本集团整体营运。谢先生在中国医药行业的投资及管理方面拥有超过二十五年的丰富经验。现为正大天晴、南京正大天晴、江苏正大丰海，江苏正大清江、正大青岛及北京泰德的董事。彼亦为上海富都世界发展有限公司、天津正大饲料科技有限公司、新兴能源科技有限公司、正大侨商房地产开发有限公司、林达控股有限公司（该公司于联交所上市）及Karolinska Development AB (publ)Karolinska Development AB (publ)（该公司于NASDAQ Stockholm Exchange上市）之董事。谢先生目前仍为正大青春宝制药有限公司董事、中国医药生物技术协会理事。中国实行改革开放政策后，谢先生即开始到中国投资发展，一九九一年起开始投身制药行业，先后参股、控股投资了十几家企业，是中国最早投身医药领域且最有成就的海外投资者之一。如今，谢先生领导的正大制药集团已发展成一家综合性兼集团化之大型生命健康产业企业，其香港上市公司 — 中国生物制药有限公司是恒生指数成份股，占据香港医药股龙头地位，旗下拥有多家全国重点高新技术企业。本集团秉承科技创新理念，立足创仿结合研发体系，坚持开发国际级尖端生物药创新药，在医疗服务、医疗器械、大健康、投资并购等多个相关领域不断突破，成为全面覆盖从药物研发、制造到销售以及慢病管理、医护等医药产业链之创新型生命健康产业集团企业。本公司自成立以来不断打破历史营收、净利润记录，二零一六年至二零一八年连续三年入选《福布斯》「亚洲最佳上市公司50强」之一。作为对其在促进中国医药行业发展的表彰，谢先生先后获得多项个人荣誉：二零零八年一月，荣获「世界杰出华人奖」并获美国西阿拉巴马大学颁发荣誉博士学位；二零零八年十二月，获授亚洲知识管理协会「二零零七╱二零零八年度亚洲知识管理协会院士」称号；二零一零年六月，获中国生产力学会及中国企业报社评为「二零一零中国企业最具创新力十大领军人物」之一。谢先生曾任第九、十及十一届全国政协委员，现任中国侨商投资企业协会常务副会长北京侨商会常务副会长、北京民营科技促进会常务副会长、中国国际跨国公司促进会副会长。谢先生为董事会主席谢其润小姐的父亲及本公司执行董事谢炘先生的堂兄。彼亦为谢辉女士的亲兄，以及谢瑗小姐及谢炫先生之堂兄，彼等均为本公司高级管理人员。"
        }
      ],
      guanli: [
        {
          name: "张喜全先生",
          text:
            "现年50岁，现任正大天晴研发副总裁兼任研究院院长。张先生于一九九四年毕业于南开大学化学系，获理学硕士。主持研究多项新药课题，尤其擅长组织新药的联合开发和选题。张先生于一九九七年四月加入正大天晴。其先后入选江苏省有突出贡献中青年专家、六大人才高峰、江苏省333工程培养对象等人才计划，并先后获得国家科技进步二等奖、江苏省科技进步二等奖、上海市科技进步二、三等奖等奖项，是公司研发领域的领军人物。"
        }
      ]
    };
  },
  methods: {},
  components: {
    TwoHeaderTitle
  }
};
</script>
<style lang="less" scoped>
.contentBox {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding-top: 105px;
}

.titleBox {
  height: 67px;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 67px;
  padding: 0 40px;
  background: #dcdbdb;
  text-align: left;
  margin-top: 70px;
  .leftCn {
    float: left;
  }
  .rightEn {
    float: right;
    color: #fff;
  }
}
.imgTextBox {
  width: 1118px;
  margin: 130px auto 0;
  text-align: left;
  .title {
    height: 57px;
    background: rgba(236, 190, 11, 1);
    padding: 0 30px;
    font-size: 30px;
    font-family: SourceHanSansCN-Heavy;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 57px;
    margin-left: 338px;
    display: inline-block;
  }
  .imgTextContent {
    width: 100%;
    margin-top: 22px;

    font-size: 26px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 36px;
    .imgWrap {
      width: 342px;
      height: 314px;
      float: left;
      position: relative;
      .imgBox {
        width: 300px;
        height: 364px;
        position: absolute;
        left: 0;
        bottom: 28px;
        text-align: center;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        box-shadow: 0px 7px 9px 1px rgba(0, 0, 0, 0.19);
        img {
          width: 225px;
          height: 320px;
        }
      }
    }
  }
}
.textBox {
  width: 1084px;
  margin: 80px auto 0;
  text-align: left;
  .textName {
    height: 30px;
    font-size: 30px;
    line-height: 30px;
    font-family: SourceHanSansCN-Normal;
    font-weight: bold;
    color: #000;
  }
  .textContent {
    margin-top: 36px;

    font-size: 26px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: #000000;
    line-height: 36px;
  }
}
</style>


