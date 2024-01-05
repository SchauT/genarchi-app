<script>
  import { PolarArea } from 'svelte-chartjs';
  import { data } from './data.js';
  import { onMount } from 'svelte';
  import { getLateByUsers } from '../api.ts';

  let lateData = [];

  onMount(async () => {
    lateData = await getLateByUsers();
    data.datasets[0].data = [];
    data.labels = [];

    for (let i = 0; i < lateData.lates.length; i++) {
      data.datasets[0].data.push(lateData.lates[i].lateInMinute);
      data.labels.push(lateData.lates[i].name);
    }
  });

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);
</script>

<PolarArea
  {data}
  width={600}
  height={600}
  options={{ responsive: false, maintainAspectRatio: false }}
/>
