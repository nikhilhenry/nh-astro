
<script lang="ts">
  let name:string
  let email:string
  let purpose:string
  let subject:string
  let message:string

  const handleSubmit = ()=>{
    console.log(name,email,purpose,subject,message)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="sm:rounded-md sm:overflow-hidden">
    <div class="py-5 space-y-6 sm:p-1">
      <!-- Name -->
      <div class="col-span-4 sm:col-span-3">
        <label for="first-name" class="block font-medium text-gray-700">Name</label>
        <input type="text" name="first-name" bind:value={name} id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <!-- Email -->
      <div class="col-span-4 sm:col-span-3">
        <label for="email-address" class="block font-medium text-gray-700">Email address</label>
        <input type="email" name="email-address"  bind:value={email} id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>

      <!-- Purpose -->
      <div class="col-span-6 sm:col-span-3">
        <label for="purpose" class="block font-medium text-gray-700">Purpose</label>
        <select id="purpose" name="purpose"  bind:value={purpose} class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Say Hi</option>
          <option>Software Development</option>
          <option>Education</option>
          <option>Business</option>
          <option>Other</option>
        </select>
      </div>

      <!-- Subject -->
        <div class="col-span-4 sm:col-span-3">
          <label for="email-address" class="block font-medium text-gray-700">Subject</label>
          <input type="text" name="email-subject"  bind:value={subject} id="email-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>

      <!-- Message -->
      <div>
        <label for="about" class="block font-medium text-gray-700">Message</label>
        <div class="mt-1">
          <textarea id="about" name="about"  bind:value={message} rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
        </div>
      </div>

    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
    </div>
  </div>
</form>