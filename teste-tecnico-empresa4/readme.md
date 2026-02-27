# 📊 Estudo de Caso: Desafio Técnico de QA – Priorização Baseada em Risco

Bem-vindo(a) a este repositório!  
Aqui documento a resolução de um desafio técnico de Quality Assurance.

*(Nota: O nome da empresa que aplicou este teste foi censurado/ocultado neste documento por questões de confidencialidade e ética profissional).*

---

## 🏢 Contexto do Cenário

* O desafio simulou um sistema comercial gerenciando **4.000 leads** com **150 representantes de vendas** operando simultaneamente.  
* O sistema continha intencionalmente defeitos distribuídos em quatro categorias: **Técnica**, **Regra de Negócio**, **Visual** e **Comunicação**.

---

## 🎯 Objetivo

A missão principal foi identificar os defeitos, **priorizá-los pelo risco de negócio** e escrever um **relatório estruturado de bug** para a falha mais crítica.

---

## 🚦 Priorização de Riscos (Risk-Based Prioritization)

A análise resultou na seguinte classificação de prioridade para correção:

* **🔴 Crítico – Técnico:** Falha de concorrência permitindo a **sobrescrita silenciosa de dados** quando dois usuários editam o mesmo lead simultaneamente (Lost Update / Race Condition).
* **🟠 Alto – Regra de Negócio:** Ausência de validação ou controle de duplicidade na criação/edição de leads.
* **🟡 Médio – Comunicação:** Mensagens de erro do sistema pouco claras ou enganosas.
* **🟡 Médio – Visual:** Inconsistências de interface ou desalinhamento de layout.

---

## 🔎 Análise Detalhada do Problema Crítico

A falha de maior risco identificada afeta diretamente a integridade do banco de dados e a operação comercial.

### 🚨 O Problema

* Quando dois usuários abrem e editam o mesmo lead simultaneamente, o sistema permite que ambos salvem as alterações sem detectar o conflito.
* O segundo salvamento **sobrescreve o primeiro** sem qualquer aviso, gerando perda silenciosa de dados.

### ✅ Comportamento Esperado

* O sistema deve implementar um **controle de concorrência** (bloqueio otimista ou pessimista) para impedir sobrescrita silenciosa.
* Se um registro foi modificado desde que foi aberto, o usuário deve ser notificado antes de salvar.

### 📉 Impacto no Negócio

* Em um cenário com 150 usuários simultâneos e 4.000 leads, a probabilidade de edição concorrente é alta.
* O problema compromete a integridade dos dados, causa perda de informações críticas, retrabalho, conflitos entre equipes e impacto direto na receita.

---

*Estudo de caso desenvolvido para demonstração de habilidades analíticas avançadas em Engenharia de Qualidade.*
