---
layout: page
title: Projects
tagline: Research, publications, and industry work
---
{% include JB/setup %}

<style>
  .section-intro {
    color: #666;
    margin-bottom: 28px;
    font-size: 0.95em;
  }
  .project-list {
    list-style: none;
    padding: 0;
    margin: 0 0 48px;
  }
  .project-list li {
    padding: 18px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .project-list li:first-child {
    border-top: 1px solid #f0f0f0;
  }
  .project-title {
    font-size: 1.05em;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .project-title a {
    text-decoration: none;
    color: #333;
  }
  .project-title a:hover {
    color: #BADA55;
  }
  .project-venue {
    font-size: 0.82em;
    color: #888;
    margin-bottom: 6px;
  }
  .project-desc {
    font-size: 0.92em;
    color: #555;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  .tag-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tag-list li {
    padding: 0 !important;
    border: none !important;
  }
  .tag {
    background: #f0f0f0;
    color: #555;
    font-size: 0.75em;
    padding: 2px 8px;
    border-radius: 3px;
  }
</style>

## Research & Publications

<p class="section-intro">Peer-reviewed work in NLP, multi-agent reinforcement learning, and robotics.</p>

<ul class="project-list">

  <li>
    <div class="project-title"><a href="https://arxiv.org/abs/2601.18554" target="_blank">Deconstructing Instruction-Following</a></div>
    <div class="project-venue">EACL 2026 (main conference) &middot; October 2025</div>
    <div class="project-desc">A new benchmark for granular evaluation of LLM instruction compliance abilities, enabling fine-grained analysis of where language models fail to follow constraints.</div>
    <ul class="tag-list"><li><span class="tag">LLMs</span></li><li><span class="tag">Benchmarking</span></li><li><span class="tag">NLP</span></li><li><span class="tag">Python</span></li></ul>
  </li>

  <li>
    <div class="project-title"><a href="https://arxiv.org/abs/2601.03359" target="_blank">Enhancing LLM Instruction Following</a></div>
    <div class="project-venue">EACL 2026 (main conference) &middot; October 2025</div>
    <div class="project-desc">An evaluation-driven multi-agentic workflow for prompt instruction optimization, capable of automatically improving the constraint-following ability of LLMs.</div>
    <ul class="tag-list"><li><span class="tag">LLMs</span></li><li><span class="tag">Prompt Optimization</span></li><li><span class="tag">Multi-Agent</span></li><li><span class="tag">Python</span></li></ul>
  </li>

  <li>
    <div class="project-title"><a href="https://ieeexplore.ieee.org/abstract/document/10374262" target="_blank">Rollout and Policy Iteration for MARL with Application to Multi-Robot Problems</a></div>
    <div class="project-venue">IEEE Transactions on Robotics &middot; March 2024</div>
    <div class="project-desc">Multiagent reinforcement learning via rollout and policy iteration for partially observable Markov decision processes (POMDPs), demonstrated on multi-robot coordination tasks.</div>
    <ul class="tag-list"><li><span class="tag">MARL</span></li><li><span class="tag">Robotics</span></li><li><span class="tag">POMDP</span></li><li><span class="tag">Python</span></li></ul>
  </li>

  <li>
    <div class="project-title"><a href="https://aclanthology.org/2022.coling-1.586/" target="_blank">Unsupervised Data Augmentation for Aspect Based Sentiment Analysis</a></div>
    <div class="project-venue">COLING 2022 &middot; October 2022</div>
    <div class="project-desc">A data-efficient training approach to Aspect Based Sentiment Analysis using unsupervised data augmentation, reducing dependence on labelled data in low-resource settings.</div>
    <ul class="tag-list"><li><span class="tag">NLP</span></li><li><span class="tag">Sentiment Analysis</span></li><li><span class="tag">Data Augmentation</span></li><li><span class="tag">Python</span></li></ul>
  </li>

  <li>
    <div class="project-title"><a href="https://ieeexplore.ieee.org/abstract/document/9024010" target="_blank">Multi-Agent Reinforcement Learning using Rollout</a></div>
    <div class="project-venue">Conference on Robot Learning (CoRL) &middot; November 2020</div>
    <div class="project-desc">Multiagent rollout and policy iteration for POMDP, with application to multi-robot repair problems in complex, partially observable environments.</div>
    <ul class="tag-list"><li><span class="tag">MARL</span></li><li><span class="tag">Robotics</span></li><li><span class="tag">RL</span></li><li><span class="tag">Python</span></li><li><span class="tag">C++</span></li><li><span class="tag">MPI</span></li></ul>
  </li>

  <li>
    <div class="project-title"><a href="https://arxiv.org/pdf/2011.04222.pdf" target="_blank">Reinforcement Learning for POMDP</a></div>
    <div class="project-venue">IEEE Robotics and Automation Letters &middot; July 2020</div>
    <div class="project-desc">Partitioned rollout and policy iteration for autonomous sequential repair problems in partially observable environments, published in IEEE RA-L.</div>
    <ul class="tag-list"><li><span class="tag">RL</span></li><li><span class="tag">POMDP</span></li><li><span class="tag">Robotics</span></li><li><span class="tag">Python</span></li><li><span class="tag">C++</span></li></ul>
  </li>

  <li>
    <div class="project-title"><a href="https://ieeexplore.ieee.org/abstract/document/8069224" target="_blank">Automated Space Layout Generation using Genetic Algorithm</a></div>
    <div class="project-venue">IEEE AMIAMS Conference &middot; May 2016</div>
    <div class="project-desc">AutoCAD plugin using a genetic algorithm to generate architectural space layouts satisfying geometric and topological constraints, giving architects multiple design options automatically.</div>
    <ul class="tag-list"><li><span class="tag">Genetic Algorithm</span></li><li><span class="tag">AutoCAD</span></li><li><span class="tag">AutoLisp</span></li></ul>
  </li>

</ul>

## Industry Projects

<p class="section-intro">Selected production systems and applied research from 7+ years of industry work.</p>

<ul class="project-list">

  <li>
    <div class="project-title">DFS Risk Model Integration</div>
    <div class="project-venue">Capital One &middot; 2025 – Present</div>
    <div class="project-desc">Leading the integration of Discover Financial Services Customer Management Risk Models (valuation $3B+) with Capital One's infrastructure.</div>
    <ul class="tag-list"><li><span class="tag">Risk Modeling</span></li><li><span class="tag">LLMs</span></li><li><span class="tag">FinTech</span></li></ul>
  </li>

  <li>
    <div class="project-title">LLM Instruction Benchmark & Prompt Optimizer</div>
    <div class="project-venue">Capital One &middot; 2024 – 2025</div>
    <div class="project-desc">Invented a new benchmark to evaluate LLM instruction-following and developed a multi-agentic prompt optimization system to automatically improve compliance. Work published at EACL 2026.</div>
    <ul class="tag-list"><li><span class="tag">LLMs</span></li><li><span class="tag">Benchmarking</span></li><li><span class="tag">Prompt Engineering</span></li><li><span class="tag">Multi-Agent</span></li></ul>
  </li>

  <li>
    <div class="project-title">Conversational Servicing Agent</div>
    <div class="project-venue">Capital One &middot; 2023 – 2024</div>
    <div class="project-desc">Built a tool-augmented conversational agent using ReACT, RAG, and LangChain, with a fine-tuned Mistral-7B backend (SFT + PEFT: LoRA, DoRA, GaLore) for reliable tool calling.</div>
    <ul class="tag-list"><li><span class="tag">LLMs</span></li><li><span class="tag">RAG</span></li><li><span class="tag">ReACT</span></li><li><span class="tag">LangChain</span></li><li><span class="tag">Fine-tuning</span></li></ul>
  </li>

  <li>
    <div class="project-title">Self-Play Multi-Agent Fraud Simulation</div>
    <div class="project-venue">Capital One &middot; 2024</div>
    <div class="project-desc">Designed a LangGraph-based self-play game between Agent, Customer, and Fraudster personas using ReACT and Reflexion for short- and long-term planning, surfacing novel attack patterns and countermeasures.</div>
    <ul class="tag-list"><li><span class="tag">Multi-Agent</span></li><li><span class="tag">LangGraph</span></li><li><span class="tag">ReACT</span></li><li><span class="tag">Fraud Detection</span></li></ul>
  </li>

  <li>
    <div class="project-title">Row Encoder Transformer for Fraud Detection</div>
    <div class="project-venue">Capital One &middot; 2023</div>
    <div class="project-desc">Designed a row-level encoder transformer for tabular fraud detection that outperformed the GBM baseline by 5% at scale. Also explored time-series transformers (TimesFM, iTransformer) for financial forecasting.</div>
    <ul class="tag-list"><li><span class="tag">Transformers</span></li><li><span class="tag">Fraud Detection</span></li><li><span class="tag">PyTorch</span></li><li><span class="tag">FinTech</span></li></ul>
  </li>

  <li>
    <div class="project-title">Call Intent Classification at Scale</div>
    <div class="project-venue">Capital One &middot; 2021 – 2023</div>
    <div class="project-desc">Built a large multi-label BERT-based classifier (350+ categories) on call transcripts to identify why customers contact Capital One, processing 300K+ calls per day in production.</div>
    <ul class="tag-list"><li><span class="tag">BERT</span></li><li><span class="tag">NLP</span></li><li><span class="tag">Multi-label Classification</span></li><li><span class="tag">Seldon</span></li></ul>
  </li>

  <li>
    <div class="project-title">Deep Learning Video Recommendation Engine</div>
    <div class="project-venue">Roposo (Relevant E Solutions) &middot; 2018 – 2019</div>
    <div class="project-desc">Replaced a traditional ALS recommendation system with a deep learning collaborative filtering model, lifting video views by 2% across 14M users. Validated via A/B testing; trained on distributed TensorFlow on AWS.</div>
    <ul class="tag-list"><li><span class="tag">Deep Learning</span></li><li><span class="tag">Recommendation</span></li><li><span class="tag">Collaborative Filtering</span></li><li><span class="tag">Spark</span></li><li><span class="tag">AWS</span></li></ul>
  </li>

  <li>
    <div class="project-title">Contact-Center NLP Pipeline</div>
    <div class="project-venue">Ameyo (Drishti Soft Solutions) &middot; 2016 – 2018</div>
    <div class="project-desc">Built an end-to-end NLP pipeline for sentiment and emotion analysis of inbound contact-center emails using an LSTM on TensorFlow (F1 ~0.86). Also developed a BTTC (best time to contact) model that improved outbound call connectivity by 2% at HDFC Bank.</div>
    <ul class="tag-list"><li><span class="tag">NLP</span></li><li><span class="tag">LSTM</span></li><li><span class="tag">TensorFlow</span></li><li><span class="tag">Spark</span></li></ul>
  </li>

</ul>
