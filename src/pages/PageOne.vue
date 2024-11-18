<template>
  <div>
    <div class="flex flex-col my-[10px] gap-2 justify-center">
      <div>
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          class="h-[30px] rounded-md outline-none px-2 mb-3"
          type="text"
        />

        <button
          class="my-[10px] inline-block bg-white rounded-md w-[100px] h-[30px] cursor-pointer"
          @click="handleSubmitName"
        >
          Submit
        </button>
      </div>

      <div>
        <label for="gender">Gender</label>
        <select
          v-model="gender"
          name="gender"
          id="gender"
          class="h-[30px] rounded-md outline-none px-2 mb-3"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button
          class="my-[10px] inline-block bg-white rounded-md w-[100px] h-[30px] cursor-pointer"
          @click="handleSubmitGender"
        >
          Submit
        </button>
      </div>

      <div>
        <label for="job">Job</label>
        <input
          v-model="job"
          type="text"
          id="job"
          class="h-[30px] rounded-md outline-none px-2 mb-3"
        />

        <button
          class="my-[10px] inline-block bg-white rounded-md w-[100px] h-[30px] cursor-pointer"
          @click="handleSubmitJob"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { event } from 'vue-gtag'

  const name = ref('')
  const gender = ref('')
  const job = ref('')

  const handleSubmitGender = () => {
    console.log('gender', gender.value)
    event('gender_submitted', { value: gender.value })
  }

  const handleSubmitName = () => {
    console.log('name', name.value)
    event('name_submitted', { value: name.value })
  }

  const handleSubmitJob = () => {
    console.log('job', job.value)
    event('job_submitted', { value: job.value })
  }
</script>
<style scoped>
  label {
    min-width: 70px;
    display: inline-block;
  }
  select,
  input {
    width: 250px;
    margin-right: 10px;
  }
</style>
