<script lang="ts">
	import { error } from '@sveltejs/kit';

	/** @type {import('./$types').PageLoad} */
	export function load() {
		throw error(404, 'Not Found');
	}
</script>

404입니다.
