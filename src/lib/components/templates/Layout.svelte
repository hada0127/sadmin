<script lang="ts">
	import Gnb from '$components/modules/Gnb.svelte';
	import Lnb from '$components/modules/Lnb.svelte';
	export let pageTitle: string, pagePath: string;
</script>

<Gnb />
<div class="container columns is-gapless">
	<aside class="column is-narrow">
		<Lnb />
	</aside>
	<section class="column">
		<div class="contents">
			<header>
				<h1>{pageTitle}</h1>
				<div class="path">
					<a href="/">HOME</a>
					{@html pagePath}
				</div>
			</header>
			<article class="article">
				<slot />
			</article>
		</div>
	</section>
</div>

<style lang="scss">
	.container {
		position: relative;
		max-width: 100%;
		aside {
			display: block;
			position: relative;
		}
		header {
			position: relative;
			h1 {
				font-size: 20px;
				font-weight: 700;
				border-bottom: var(--line-base-color);
			}
			.path {
				position: absolute;
				font-size: 12px;
				right: 0;
				bottom: 5px;
				color: var(--font-desc-color);
			}
		}

		div.contents {
			padding: 20px 30px;
		}
	}
</style>
