<template>
  <div>
    <Header />

    <main>
      <section class="section flex flex-col h-[92svh] sm:h-auto">
        <div
          class="container-wrapper px-2.5 flex items-center flex-col justify-between overflow-x-hidden py-5 h-full sm:px-5 sm:flex-row">
          <div class="flex flex-col gap-3">
            <h1
              class="text-2xl max-w-[280px] font-bold tracking-tighter text-center mb-[-60px] sm:mb-0 sm:text-4xl sm:max-w-[400px] sm:text-start">
              THE NEW AND SMART WAY TO INVEST
            </h1>
            <p class="text-sm font-bold hidden sm:block">
              Get on board today, and fly with us.
            </p>
            <span class="self-start primary-button hidden sm:block">
              Sign up
            </span>
          </div>
          <lottie-player
            autoplay
            loop
            mode="normal"
            :src="hero"
            class="max-w-[500px] w-full h-[auto] sm:max-w-[600px] sm:mt-[-20px] sm:me-[-40px]">
          </lottie-player>
          <p class="text-sm font-bold mb-5 sm:hidden">
            Get on board today, and fly with us.
          </p>
          <span class="primary-button self-center sm:hidden"> Sign up </span>
        </div>
      </section>

      <section
        id="futures"
        class="section flex items-center flex-wrap justify-center gap-4 mx-2.5">
        <div
          class="flex flex-col gap-2 sm:max-w-72"
          v-for="content in heroBlocs"
          :key="content.title">
          <h3
            class="text-[#676a6c] text-xl font-semibold text-center sm:text-start">
            {{ content.title }}
          </h3>
          <p class="text-[#aeaeae] text-sm text-center sm:text-start">
            {{ content.description }}
          </p>
        </div>
      </section>

      <section id=" how-it-works" class="section">
        <div class="container-wrapper">
          <h2
            class="relative m-auto w-fit flex items-center justify-center text-3xl text-[#676a6c] after:content-[''] after:absolute after:h-[2px] after:top-[-10px] after:left-[30%] after:right-[30%] after:bg-[#1ab394] rounded-lg">
            How It Works
          </h2>
          <div
            class="flex items-center flex-col justify-around mx-2.5 md:flex-row">
            <div class="flex flex-col gap-y-10">
              <div
                class="flex flex-col gap-3 items-center sm:max-w-[215px] sm:min-h-[232px]">
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  :src="signUp"
                  class="w-[80px] h-[80px]">
                </lottie-player>
                <h4 class="text-[#676a6c] text-xl font-medium text-center">
                  Sign Up
                </h4>
                <p class="text-[#aeaeae] text-sm text-center">
                  Just create an account and login inside the system. (we
                  currently allow only registration by invites only, if you
                  would like to signup, please apply)
                </p>
              </div>
              <div
                class="flex flex-col gap-3 items-center sm:max-w-[215px] sm:min-h-[232px] max-h-[232px]">
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  :src="contract"
                  class="w-[80px] h-[80px]">
                </lottie-player>
                <h4 class="text-[#676a6c] text-xl font-medium text-center">
                  Order the Contract
                </h4>
                <p class="text-[#aeaeae] text-sm text-center">
                  Check the contract you are going to order. At this moment you
                  can order contract for 6 months.
                </p>
              </div>
            </div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              :src="money"
              class="max-w-[400px] w-full h-auto self-center">
            </lottie-player>
            <div class="flex flex-col gap-y-5">
              <div
                class="flex flex-col gap-3 items-center sm:max-w-[215px] sm:min-h-[232px]">
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  :src="deposit"
                  class="w-[100px] h-[100px]">
                </lottie-player>
                <h4 class="text-[#676a6c] text-xl font-medium text-center">
                  Make a deposit
                </h4>
                <p class="text-[#aeaeae] text-sm text-center">
                  Check the contract you are going to order. At this moment you
                  can order contract for 6 months.
                </p>
              </div>
              <div
                class="flex flex-col gap-3 items-center sm:max-w-[215px] sm:min-h-[232px]">
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  :src="interestPaid"
                  class="w-[100px] h-[100px]">
                </lottie-player>
                <h4 class="text-[#676a6c] text-xl font-medium text-center">
                  Get Your Interest
                </h4>
                <p class="text-[#aeaeae] text-sm text-center">
                  Get your interest paid monthly and enjoy it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container-wrapper">
          <h2
            class="relative m-auto w-fit flex items-center text-center justify-center text-3xl text-[#676a6c] after:content-[''] after:absolute after:h-[2px] after:top-[-10px] after:left-[30%] after:right-[30%] after:bg-[#1ab394] rounded-lg">
            Discover great opportunities
          </h2>
          <p class="text-[#aeaeae] text-sm text-center my-5 sm:my-0">
            SUCCESS IS BETTER WHEN YOU SHARE IT
          </p>
          <div
            class="flex items-center mx-2.5 flex-col justify-between sm:flex-row sm:mx-5">
            <div class="flex flex-col gap-5">
              <h4
                class="text-[#676a6c] text-xl font-medium text-center sm:text-start">
                Created with love
              </h4>
              <p
                class="text-[#aeaeae] text-sm max-w-lg text-center sm:text-start">
                We decided to develop our platform and help people to invest
                money in cryptocurrencies without doing risks themselves. We use
                the most advanced technologies and best analysis minds while we
                are doing all the investment process for you to make sure you
                earn your investment.
              </p>
              <span class="primary-button self-center sm:self-start">
                Sign up
              </span>
            </div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              :src="profit"
              class="max-w-[400px] w-full h-auto">
            </lottie-player>
          </div>
        </div>
      </section>

      <!-- <section id="plan" class="section mx-2.5 sm:mx-5">
        <div class="timeline">
          <div class="timeline-card">
            <h3 class="timeline-title">Closed Public Release</h3>
            <p class="timeline-description">
              At this moment we are inviting to our platform people we know to
              get more feedback. However, if you are interested, feel free to
              inquire.
            </p>
            <span class="timeline-date">
              <span class="timeline-day">Friday</span>
              <span class="timeline-month">March 30</span>
            </span>
            <div class="timeline-icon"></div>
          </div>
        </div>
      </section> -->

      <section id="faq" class="section mx-2.5 sm:mx-5">
        <h2
          class="relative m-auto w-fit flex items-center justify-center text-3xl text-[#676a6c] after:content-[''] after:absolute after:h-[2px] after:top-[-10px] after:left-[30%] after:right-[30%] after:bg-[#1ab394] rounded-lg">
          FAQ
        </h2>
        <p class="text-[#aeaeae] text-sm text-center">
          Haven't found your question? Ask us!
        </p>
        <Accordion
          type="single"
          class="max-w-4xl m-auto text-[#676a6c]"
          collapsible
          :default-value="defaultFaqOpen">
          <AccordionItem
            v-for="item in faq"
            :key="item.value"
            :value="item.value">
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent class="text-[#aeaeae]">
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section
        id="contact"
        class="section flex items-center justify-center w-full">
        <div
          class="container-wrapper flex flex-col items-center mx-2.5 pb-2 w-full sm:mx-5">
          <h2
            class="relative m-auto mb-8 w-fit flex items-center justify-center text-3xl text-[#676a6c] after:content-[''] after:absolute after:h-[2px] after:top-[-10px] after:left-[30%] after:right-[30%] after:bg-[#1ab394] rounded-lg">
            Contact Us
          </h2>
          <div class="flex flex-col items-start self-start">
            <span class="text-[#1ab394] font-bold text-sm"
              >GTEX INNOVATIONS LTD</span
            >
            <span class="text-[#676a6c] text-sm">71-75 Shelton Street,</span>
            <span class="text-[#676a6c] text-sm"
              >Covent Garden, London, UK, WC2H 9JQ</span
            >
            <p class="mt-5 text-[#676a6c] text-sm">
              SUCCESS IS BETTER WHEN YOU SHARE IT
            </p>
          </div>
          <span class="primary-button text-sm my-8"> Send us mail </span>
          <span class="text-[#aeaeae] font-bold text-sm"
            >Copyright© 2024 GTEX INNOVATIONS LTD</span
          >
          <span class="text-[#aeaeae] text-sm"
            >All rights reserved and are protected by intellectual
            property.</span
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import signUp from "@/assets/lottie/sign-up.json";
import contract from "@/assets/lottie/contract.json";
import deposit from "@/assets/lottie/deposit.json";
import interestPaid from "@/assets/lottie/interest-paid.json";
import money from "@/assets/lottie/money.json";
import profit from "@/assets/lottie/profit.json";
import hero from "@/assets/lottie/hero.json";

const defaultFaqOpen = "item-1";

const heroBlocs = [
  {
    title: "Invest With Us",
    description: `By investing with us, you are investing with no risks. We don't buy shares or depend on the political situation in the world`,
  },
  {
    title: "Smart and Simple",
    description: `Let us think about all the investments, and monitor crypto markets for everything that's going on around.`,
  },
  {
    title: "No Hidden Fees",
    description: `We do cover even transaction fees, so you get the exactly same amount of interest as promised.`,
  },
  {
    title: "Best Analysts Team",
    description: `We spent a lot of time to find the best analysts in cryptocurrencies around the world. We know what we are doing and why.`,
  },
];

const faq = [
  {
    value: "item-1",
    title: "Do I need to buy something ?",
    content:
      "No. You just make an investment and our team does all magic to earn your interest.",
  },
  {
    value: "item-2",
    title: "What's that magic about ?",
    content:
      "Our analytics team spreads the investment into different cryptocurrencies to guarantee your interest rate at zero risks.",
  },
  {
    value: "item-3",
    title: "What is cryptocurrency ?",
    content:
      "A cryptocurrency is a digital asset designed to work as a medium of exchange that uses cryptography to secure its transactions, to control the creation of additional units, and to verify the transfer of assets.",
  },
  {
    value: "item-4",
    title: 'How come you say "zero risks" ?',
    content:
      "We have a big team of analytics from different parts of planet who track whole market 24/7 and instead of buying one specific currency, we perform different investments couple times per day.",
  },
  {
    value: "item-5",
    title: "Do you charge any fees ?",
    content:
      "No, we don't charge any fees from your original investment or from your interest. Moreover, we even cover transaction fees.",
  },
  {
    value: "item-6",
    title: "What is the minimum investment ?",
    content: "The minimum investment is $1000.",
  },
  {
    value: "item-7",
    title: "How often do you pay interest ?",
    content: "Your interest is paid monthly.",
  },
  {
    value: "item-8",
    title: "Can I make more than one investment ?",
    content:
      "Yes, sure. However, the current limit for total investments is $40.000",
  },
  {
    value: "item-9",
    title: "Do you have mobile apps ?",
    content: "We are working hard and will release our app soon :)",
  },
];
</script>

<style lang="scss" scoped>
.timeline {
  max-width: 1024px;
  width: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: space-evenly;
  gap: 20px;

  &-card {
    padding: 1.6rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #1ab394;
  }

  &-description {
    font-size: 1.2rem;
    color: #676a6c;
  }

  // &-icon {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 10px;
  // }

  // &-day {
  //   font-size: 1.2rem;
  //   font-weight: 600;
  //   color: #676a6c;
  // }

  // &-month {
  //   font-size: 1.2rem;
  //   font-weight: 400;
  //   color: #676a6c;
  // }
}

.primary-button {
  width: fit-content;
  padding: 10px 20px;
  background-color: #1ab394;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #17a185;
  }
}

.section {
  &:nth-child(even):not(:nth-child(2)) {
    background-color: #edf6f9;
  }

  & + & {
    padding-top: 50px;
  }
}
</style>
