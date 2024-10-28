<template>

    <v-layout class="rounded rounded-md">
        <v-app-bar title="Test"></v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <Toaster position="top-right" />
            <v-btn @click="() => toast.success('My first toast')">Render a toast</v-btn>
        </v-main>
    </v-layout>
</template>

<script setup>
import { Toaster, toast } from 'vue-sonner'
</script>

