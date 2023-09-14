<template>
  <div class="div">
    <div class="pri">
      <img class="pri_img" src="../assets/perfil.jpg" />
      <h4 class="pri_des">DESENVOLVEDOR</h4>

      <div class="pri_azul">
        <h4 class="pri_tec">Tecnologias de conhecimento</h4>
        <hr class="pri_tra" />
        <ul>
          <li class="pir_lista" v-for="(lis, ind) in lista" :key="ind">{{ lis }}</li>
        </ul>
        <h4 class="pri_con">Dados de Contato</h4>
        <hr class="pri_tra" />
        <div class="pri_div_con">
          <div class="pri_div_ico">
            <SvgIcon :fontSize="30" :icon="contato" />
            {"(85) 98766-2038"}
          </div>
          <div class="pri_div_ico">
            <SvgIcon :fontSize="30" :icon="localizar" />
            {"Fortaleza, CE Brasil"}
          </div>
          <div class="pri_div_ico">
            <SvgIcon :fontSize="30" :icon="email" />
            {"ansergiofortal@hotmail.com \n ansergiofortal@gmail.com"}
          </div>
        </div>
      </div>
    </div>

    <div class="seg">
      <h1 class="seg_tit">SÉRGIO VIEIRA</h1>
      <hr class="seg_tra" />
      <p class="seg_p1">
        Engenheiro de software, atuando no mercado como desenvolvedor de Front-end e back-end. Desejo apresentar todas as minhas qualificações
        profissionais com intuito de crescimento continuo e de aplicar as melhores soluções de mercado.
      </p>
      <h3 class="seg_his">HISTÓRICO PROFISSIONAL</h3>
      <hr class="seg_tra" />
      <h4 class="seg_h">COTEX – 2005 - 2023</h4>
      <h5 class="seg_h">Cargo: Analista de Suporte computacional (TI)</h5>
      <p class="seg_p2">
        Principais atividades: Implementação de novas funcionalidades, correções de bugs, configuração e instalação de hardwares e softwares,
        manutenção de equipamentos, suporte técnico e resolução de problemas, execução de melhorias regulares e aquisição de insumos: equipamentos,
        acessórios e periféricos. desenvolvimento de aplicações desktop, web e mobile
      </p>
      <h3 class="seg_for">FORMAÇÃO ACADÊMICA</h3>
      <hr class="seg_tra" />
      <h4 class="seg_h">UNOPAR</h4>
      <h5 class="seg_h">Análise e Desenvolvimento de Sistemas, 2023 – 2025 (cursando)</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "./SvgIcon.vue";
import { contato, email, localizar } from "./Svg/Svgs";
import { useThema } from "../composable/States";
const thema = useThema;

//console.log(thema.primaria);

const lista = [
  "Tauri",
  "React",
  "React-Native",
  "Next",
  "Nuxt",
  "Vite",
  "Vue",
  "Styled-Components",
  "Html",
  "CSS",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "Rust",
  "Python",
  "Arduino-C++",
  "MongoDB",
  "Firebese",
  "Firibird",
];
</script>

<style scoped>
.div {
  width: 22cm;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: v-bind("thema?.cor?.c12");
}

.pri {
  width: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.pri_img {
  width: 200px;
  height: 200px;
  margin: 40px 25px 0px 25px;
  border-radius: 50%;
  resize: vertical;
  object-fit: cover;
  object-position: center;
}
.pri_des {
  width: 250px;
  padding: 0px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 6px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: v-bind("thema?.cores?.blue");
}
.pri_azul {
  width: 250px;
  height: 867px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: linear-gradient(90deg, #0055ff 33%, #0077ff 66%, #0099ff 100%);
}
.pri_tec {
  width: 250px;
  font-size: 16px;
  letter-spacing: 6px;
  display: flex;
  position: relative;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  color: v-bind("thema?.cor?.c12");
}
.pri_tra {
  width: 230px;
  height: 1px;
  bottom: 10px;
  margin: 0px;
  padding: 0px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.pir_lista {
  padding: 1px 6px;
  font-size: 14px;
}
.pri_con {
  width: 250px;
  font-size: 16px;
  letter-spacing: 5px;
  display: flex;
  position: relative;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  color: v-bind("thema?.cor?.c12");
}
.pri_div_con {
  width: 250px;
  gap: 6px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.pri_div_ico {
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.seg {
  width: 580px;
  height: 1132px;
  margin: 40px 0px 0px 0px;
  padding: 0px;
  border-radius: 10px;
  border-top-left-radius: 80px;
  border-color: v-bind("thema?.cor?.c07");
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  color: v-bind("thema?.cor?.c01");
  background-color: v-bind("thema.cor.c13");
}
.seg_tit {
  width: 500px;
  padding: 30px 0px 0px 30px;
  font-size: 44px;
  font-weight: 800;
  font-family: Helvetica;
  letter-spacing: 0px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  color: v-bind("thema?.cor?.c05");
}
.seg_tra {
  width: 520px;
  height: 1px;
  bottom: 15px;
  margin: 0px;
  padding: 0px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  justify-content: center;
  color: v-bind("thema?.cor?.c07");
  background-color: v-bind("thema?.cor?.c07");
}
.seg_p1 {
  width: 500px;
  padding: 0px 30px;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.seg_his {
  width: 500px;
  padding: 30px 0px 0px 30px;
  font-size: 18px;
  letter-spacing: 6px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.seg_h {
  width: 550px;
  margin: 0px;
  padding: 0px;
  padding-left: 30px;
  letter-spacing: 2px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.seg_p2 {
  width: 500px;
  margin: 0px;
  padding: 20px 0px 0px 30px;
  letter-spacing: 2px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}

.seg_for {
  width: 500px;
  padding: 30px 0px 0px 30px;
  font-size: 18px;
  letter-spacing: 6px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}

@media print {
}
</style>
