<script lang="ts">
  import IconGithub from '$lib/components/icons/IconGithub.svelte'
  import IconTelegram from '$lib/components/icons/IconTelegram.svelte'
  import IconX from '$lib/components/icons/IconX.svelte'
  import { PROJECT_URL } from '$lib/constants'
  import { ConicGradient } from '@skeletonlabs/skeleton'
  import Saos from 'saos'
  import IconCcfc from '$lib/components/icons/IconCCFC.svelte'
  import VideoEmbed from '$lib/components/core/VideoEmbed.svelte'
  import IconWhitepaper from '$lib/components/icons/IconWhitepaper.svelte'
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
        <IconCcfc />
      </div>
    </Saos>
    <!-- <img class="mt-12" src="/_assets/ccfc-dao.svg" alt="CCFC brand" /> -->
    <h1 class="h1 text-ccfc mb-6 mt-10 text-center font-extrabold uppercase"
      ><b>Cerveza Cristal Fan Coin</b></h1
    ><p class="text-2xl"> May the Meme Coin Be With You!</p>
  </div>
  <div
    class="mt-10 flex max-w-4xl flex-row items-center gap-6 max-sm:flex-col *:max-sm:w-60"
  >
    <a
      type="button"
      title="Participate in SNS sale"
      class="variant-filled btn token-sale"
      href="https://nns.ic0.app/launchpad/"
      target="_blank"
    >
      <span class="text-left">Token will launch soon! 🚀</span>
    </a>
  </div>
  <div class="mt-6 max-w-screen-sm">
    <p class="text-center text-lg font-normal antialiased">
      <b>Calling all Star Wars fanatics and crypto enthusiasts!</b> Get ready
      for the
      <a
        class="text-ccfc font-bold underline underline-offset-4"
        href={PROJECT_URL}
        target="_blank">Cerveza Cristal Fan Coin</a
      >
      (CCFC), the ultimate meme coin that celebrates the epicness of that viral Cerveza
      Cristal ad sneaked into Star Wars Episode IV (you know the one, the thirst-quenchingly
      awesome one).<br /><br />
      <b>This ain't your average crypto</b>. CCFC is built on the cutting-edge
      Internet Computer (ICP), and guess what? It's governed by a
      <b>Decentralized Autonomous Organization (DAO)</b>, also known as a fancy
      way of saying <b>the community is in charge</b>! Yep, most of the tokens
      are in YOUR hands. <br /><br />
      So, buckle up and join the CCFC crew for a galactic meme coin adventure!
    </p>
  </div>

  <div
    class="mt-10 flex max-w-4xl flex-row items-center gap-6 max-sm:flex-col *:max-sm:w-60"
  >
    <a
      type="button"
      title="Follow on Twitter"
      class="variant-filled btn bg-slate-950"
      href="https://twitter.com/cc_fan_coin"
      target="_blank"
    >
      <span><IconX /></span>
      <span class="text-left">Twitter</span>
    </a>
    <a
      type="button"
      title="Join the Community"
      class="variant-filled btn bg-slate-950"
      href="https://t.me/+9RXL44rH8m00YmY0"
      target="_blank"
    >
      <span><IconTelegram /></span>
      <span class="text-left">Community</span>
    </a>
    <a
      type="button"
      title="View Source Code"
      class="variant-filled btn bg-slate-950"
      href="https://github.com/CCFC-labs/ccfc-sns"
      target="_blank"
    >
      <span class="*:scale-125"><IconGithub /></span>
      <span class="text-left">Source Code</span>
    </a>
    <a
      type="button"
      title="Read the whitepaper"
      class="variant-filled btn bg-slate-950"
      href="https://github.com/CCFC-labs/ccfc-sns/blob/main/whitepaper/en.md"
      target="_blank"
    >
      <span class="*:scale-125"><IconWhitepaper /></span>
      <span class="text-left">Whitepaper</span>
    </a>
    <!-- <a
      type="button"
      title="Exchange Tokens"
      class="variant-filled btn bg-slate-950"
      href=""
      target="_blank"
    >
      <span><IconExchangeDollar /></span>
      <span class="text-left">Exchange</span>
    </a> -->
  </div>

  <div
    class="mt-12 flex w-full max-w-screen-sm flex-col flex-nowrap content-center items-center text-lg sm:mt-24"
  >
    <h2 id="mission" class="h2 mb-10 font-extrabold uppercase">Our mission</h2>
    We're not just about frosty Cristals, we're full-blown Star Wars fanatics too!
    So when we saw that epic Cerveza Cristal ad grace the silver screen, well, let's
    just say our minds were BLOWN. This wasn't just an ad, it was a meme waiting
    to happen, and we knew it deserved a place in the intergalactic meme hall of
    fame!

    <Saos
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
    </p>
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
            <p class="text-ccfc"
              >Cerveza Cristal Fan Coin
              <!-- <a
                class="underline underline-offset-4"
                title="CCFC Token Info"
                href="/#"
                target="_blank">Cerveza Cristal Fan Coin</a
              > -->
            </p>
          </h3>
          <h3 class="h3 font-bold">
            <p>Token Symbol</p>
            <p class="text-ccfc"
              >CCFC
              <!-- <a
                class="underline underline-offset-4"
                title="Buy CCFC Tokens"
                href="/#"
                target="_blank"></a
              > -->
            </p>
          </h3>
          <h3 class="h3 font-bold">
            <p>Total Supply</p>
            <p class="text-ccfc">1,000,000,000</p>
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
              label: 'Dev Team',
              color: '#4F46E5',
              start: 0,
              end: 10
            },
            {
              label: 'SNS Swap',
              color: '#0FBA81',
              start: 10,
              end: 50
            },
            {
              label: 'DAO Treasury - Community & Marketing',
              color: 'rgba(234,179,8,0.7)',
              start: 50,
              end: 60
            },
            {
              label: 'DAO Treasury - DEX Liquidity',
              color: 'rgba(234,179,8,0.4)',
              start: 60,
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
    >
      <div class="mt-4 max-w-screen-sm text-lg font-normal antialiased">
        <p
          ><b>Hold onto your spacesuits, community first is our motto!</b> We're
          handing over most of the CCFC tokens to YOU, the awesome fans. Why?
          Because this project is all about <b>community power</b>.<br /><br />
          We want CCFC to organically <b>blast off to the moon</b>, and that
          means making sure there's enough fuel in the tank (liquidity) for
          smooth trading on exchanges. That's why we're focusing on providing
          plenty of liquidity – gotta make buying and selling CCFC a breeze!<br
          /><br />
          <b>Forget the fancy Neuron Fund</b>, this is a meme coin after all!
          The team is here for the love of the game (and a few CCFC tokens
          themselves).
        </p>
      </div>
    </Saos>
    <Saos
      once={true}
      animation={'slide-top 0.6s cubic-bezier(.25,.46,.45,.94) both'}
    >
      <div class="mt-12 gap-4">
        <h3 class="h3 text-center font-bold">
          <p>Treasury usage</p>
        </h3>
        <div class="mt-4 max-w-screen-sm text-lg font-normal antialiased">
          <p>
            Here's the breakdown on how we'll use the funds raised through the
            SNS sale: <br /><br />
            <b>80% Liquidity Pools:</b> We're all about a smooth-flowing market,
            so this chunk will ensure easy buying and selling of CCFC.
            <br />
            <b>20% Marketing Mission:</b> Spreading the word and building a
            vibrant CCFC community – that's what this 20% is for! The DAO will
            decide exactly how to use these funds to fuel the hype. <br /><br />
            <b>Bonus Level Unlocked!</b> If the Force is truly with us and we
            raise over 20,000 ICP, we'll use the extra funds to build tools that
            empower the entire <b>ICP Meme Coin ecosystem</b>. Talk about
            building a meme-tastic future together! <br /><br /><b
              >Want the nitty-gritty details on the SNS launch?</b
            >
            Check out the
            <a
              class="text-secondary-500 font-bold underline underline-offset-4"
              href="https://github.com/CCFC-labs/ccfc-sns/blob/main/sns_init.yaml"
              target="_blank">SNS init file</a
            >
            (it's basically the blueprint for our mission).
          </p></div
        >
      </div>
    </Saos>
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
