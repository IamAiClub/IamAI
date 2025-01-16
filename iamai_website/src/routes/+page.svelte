<script lang="ts">
  // import IconGithub from '$lib/components/icons/IconGithub.svelte'
  import IconX from '$lib/components/icons/IconX.svelte'
  import { PROJECT_URL } from '$lib/constants'
  import { ConicGradient } from '@skeletonlabs/skeleton'
  import Saos from 'saos'
  import IconIamai from '$lib/components/icons/IconIAMAI.svelte'
  // import VideoEmbed from '$lib/components/core/VideoEmbed.svelte'
  import IconMagnify from '$lib/components/icons/IconMagnify.svelte'
  import IconExchangeFunds from '$lib/components/icons/IconExchangeFunds.svelte'
  // import ButtonIc from '$lib/components/ui/ButtonIC.svelte'
  // import IconAdd from '$lib/components/icons/IconAdd.svelte'
</script>

<div
  class="mb-12 mt-12 flex flex-col flex-nowrap content-center items-center px-4 lg:mt-24"
>
  <div class="flex flex-col items-center">
    <Saos
      animation={'scale-down-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
    >
      <div
        class="size-24 rounded-full transition duration-700 ease-in-out *:size-24 hover:scale-150 hover:shadow-lg"
      >
        <IconIamai />
      </div>
    </Saos>
    <h1 class="h1 text-ccfc mb-6 mt-10 text-center font-extrabold"
      ><b>I am AI Club</b></h1
    ><p class="text-2xl">Tired of Fake AI? Join the $IAMAI Revolution!</p>
  </div>
  <div
    class="mt-10 flex max-w-4xl flex-row items-center gap-6 max-sm:flex-col *:max-sm:w-60"
  >
    <a
      type="button"
      title="Trade on ICPSwap"
      class="variant-filled btn token-sale"
      href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=kqigp-jiaaa-aaaan-qzqsq-cai"
      target="_blank"
    >
      <span><IconExchangeFunds /></span>
      <span class="text-left">Buy $IAMAI now</span>
    </a>
  </div>
  <div class="mt-6 max-w-screen-sm">
    <p class="text-center text-lg font-normal antialiased">
      The crypto world is drowning in a sea of projects claiming to be the next
      big thing in AI. But let's be honest, most of them are just riding the
      hype train with no real substance. It's time to call out the imposters and
      have a good laugh at the absurdity of it all. Enter $IAMAI, the <b
        >meme coin</b
      >
      that's not afraid to poke fun at the AI craze. We're here to expose the BS,
      celebrate the community, and maybe even make some money while we're at it.
    </p>
  </div>

  <div
    class="mt-10 flex max-w-4xl flex-row items-center gap-6 max-sm:flex-col *:max-sm:w-60"
  >
    <a
      type="button"
      title="Follow on Twitter"
      class="variant-filled btn bg-slate-950"
      href={PROJECT_URL}
      target="_blank"
    >
      <span><IconX /></span>
      <span class="text-left">Twitter</span>
    </a>
    <a
      type="button"
      title="Explorer"
      class="variant-filled btn bg-slate-950"
      href="https://ic.house/token/kqigp-jiaaa-aaaan-qzqsq-cai"
      target="_blank"
    >
      <span><IconMagnify /></span>
      <span class="text-left">Explore token</span>
    </a>
  </div>

  <div
    class="mt-12 flex w-full max-w-screen-sm flex-col flex-nowrap content-center items-center text-lg sm:mt-24"
  >
    <h2 id="mission" class="h2 mb-10 font-extrabold uppercase">Our mission</h2>
    $IAMAI is more than just a meme coin; it's a movement. It's a community of crypto
    enthusiasts who are tired of empty promises and inflated expectations. We're
    here to expose the hype by shining a light on the projects that are using AI
    as a buzzword without any real substance. We believe in transparency and honesty,
    and we're not afraid to call out the BS.<br /><br />

    At the same time, we're uniting the skeptics by building a community of
    like-minded individuals who can see through the hype. We're creating a space
    where people can share their skepticism, have a laugh, and connect with
    others who share their views.<br /><br />

    Let's face it, the crypto world can be a wild and wacky place. That's why
    we're embracing the absurdity and having some fun along the way. We believe
    that laughter is the best medicine, especially when it comes to navigating
    the ups and downs of the crypto market.<br /><br />

    And most importantly, we're empowering the community. We believe in the
    power of community. We're giving our members a voice and a platform to share
    their ideas, contribute to the project, and shape the future of $IAMAI.<br
    /><br />

    Ultimately, our mission is to create a fun, engaging, and transparent
    community where people can come together to laugh at the AI hype, support
    each other, and maybe even make some money in the process. Join the $IAMAI
    revolution and let's show the world that we're not falling for the BS. We're
    here to stay, and we're having a blast doing it.<br /><br />

    <!-- <Saos
      once={true}
      animation={'slide-top 0.6s cubic-bezier(.25,.46,.45,.94) both'}
    >
      <VideoEmbed />
    </Saos>
    <p>
      Want to dive deeper into the legend of this epic ad? Check out
      <a
        class="text-secondary-500 font-bold underline underline-offset-4"
        href="https://en.wikipedia.org/wiki/The_Force_is_with_Cristal_Beer"
        target="_blank"
      >
        its wiki page
      </a> (it's practically required viewing for any true meme connoisseur).
    </p> -->
  </div>

  <div
    class="mt-12 flex w-full max-w-4xl flex-col flex-nowrap content-center items-center sm:mt-24"
  >
    <h2 id="tokenomics" class="h2 font-extrabold uppercase">Tokenomics</h2>
    <div class="mt-8 flex w-full flex-col justify-evenly gap-y-4 sm:flex-row">
      <Saos
        once={true}
        animation={'slide-top 0.6s cubic-bezier(.25,.46,.45,.94) both'}
      >
        <div class="flex flex-col gap-4 text-center">
          <h3 class="h3 font-bold">
            <p>Token Name</p>
            <p class="text-ccfc">I am AI </p>
          </h3>
          <h3 class="h3 font-bold">
            <p>Token Symbol</p>
            <p class="text-ccfc">$IAMAI </p>
          </h3>
          <h3 class="h3 font-bold">
            <p>Max Supply</p>
            <p class="text-ccfc">4,242,424,242 $IAMAI</p>
          </h3>
        </div>
      </Saos>
      <Saos
        once={true}
        animation={'slide-top 0.6s cubic-bezier(.25,.46,.45,.94) both'}
      >
        <ConicGradient
          legend
          width="w-36"
          regionCone="hover:scale-125 hover:shadow-lg hover:-rotate-12 transition duration-700 ease-in-out"
          stops={[
            {
              label: 'Founders',
              color: '#4F46E5',
              start: 0,
              end: 10
            },
            {
              label: 'Airdrops',
              color: '#0FBA81',
              start: 10,
              end: 70
            },
            {
              label: 'Liquidity',
              color: 'rgba(234,179,8,0.7)',
              start: 70,
              end: 90
            },
            {
              label: 'Future developments',
              color: 'rgba(234,179,8,0.4)',
              start: 90,
              end: 100
            }
          ]}
        >
          <h3 class="h3 font-bold">Token Distribution</h3>
        </ConicGradient>
      </Saos>
    </div>
    <Saos
      once={true}
      animation={'slide-top 0.6s cubic-bezier(.25,.46,.45,.94) both'}
    ></Saos>
  </div>
</div>

<style>
  /**
  * ----------------------------------------
  * animation slide-top http://animista.net
  * ----------------------------------------
  */
  @keyframes -global-slide-top {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes -global-scale-down-center {
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
