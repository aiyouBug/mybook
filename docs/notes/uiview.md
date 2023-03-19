# UI 视图

### UIView 和 CALayer 的关系

UIView 为 CAlayer 提供显示内容，以及负责处理触摸事件参与响应链
Calayer 负责显示内容 contents

事件传递以及识图的响应如下图

<script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
