import createClient from "openapi-fetch";
import { version } from "../package.json";
import type { paths } from "./types/api";
import type * as schemas from "./types/schemas";

export interface HeadlessApiClientOptions {
  /**
   * LoyaltyLion Site ID used for all API requests from this client
   */
  siteId: number;
  /**
   * LoyaltyLion API key used for all API requests from this client
   *
   * @see https://developers.loyaltylion.com/api-reference/authentication/api-keys
   */
  apiKey: string;
  /**
   * Channel (e.g. web, pos, mobile) used for all API requests from this client
   */
  channel: schemas.SupportedChannel;
  /**
   * Custom fetch implementation to use instead of the default fetch
   * implementation
   *
   * @default globalThis.fetch
   */
  customFetch?: (input: Request) => Promise<Response>;
  /**
   * Base URL for API requests
   *
   * @default api.loyaltylion.com
   */
  baseUrl?: string;
}

/**
 * Create a new LoyaltyLion Headless API client linked to a specific Site
 * and Channel
 *
 * By default, this client will use `globalThis.fetch`, but you can pass in
 * a custom fetch implementation if needed
 */
export function createHeadlessApiClient({
  siteId,
  apiKey,
  channel,
  baseUrl = "https://api.loyaltylion.com",
  ...props
}: HeadlessApiClientOptions) {
  const client = createClient<paths>({
    baseUrl,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-LoyaltyLion-Channel": channel,
      "User-Agent": `loyaltylion/headless-api-client@${version}`,
    },
    ...(props.customFetch ? { fetch: props.customFetch } : {}),
  });

  return {
    configuration: {
      getConfiguration: async () => {
        return await client.GET("/headless/2025-06/{site_id}/configuration", {
          params: {
            path: { site_id: siteId },
          },
        });
      },
    },

    customers: {
      getCustomer: async (id: string) => {
        return await client.GET(
          "/headless/2025-06/{site_id}/customers/{merchant_id}",
          {
            params: {
              path: {
                site_id: siteId,
                merchant_id: encodeURIComponent(id),
              },
            },
          },
        );
      },
      initializeSession: async (
        props: Pick<
          schemas.CustomersInitializeSessionRequestBody,
          "cart" | "session"
        > & {
          customer: {
            id: string;
          } & schemas.CustomersInitializeSessionRequestBody["customer"];
        },
      ) => {
        const {
          customer: { id: merchantId, ...customer },
          ...body
        } = props;

        return await client.POST(
          "/headless/2025-06/{site_id}/customers/{merchant_id}/sessions",
          {
            params: {
              path: {
                site_id: siteId,
                merchant_id: encodeURIComponent(merchantId),
              },
            },
            body: {
              customer,
              ...body,
            },
          },
        );
      },
      setBirthday: async (props: {
        /**
         * Customer merchant ID
         */
        id: string;
        birthday: schemas.CustomersSetBirthdayRequestBody["birthday"];
      }) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/customers/{merchant_id}/birthday",
          {
            params: {
              path: {
                site_id: siteId,
                merchant_id: encodeURIComponent(props.id),
              },
            },
            body: {
              birthday: props.birthday,
            },
          },
        );
      },
      subscribeToEmailMarketing: async (props: {
        /**
         * Customer merchant ID to subscribe to email marketing
         */
        id: string;
      }) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/customers/{merchant_id}/email_marketing/subscribe",
          {
            params: {
              path: {
                site_id: siteId,
                merchant_id: encodeURIComponent(props.id),
              },
            },
          },
        );
      },
    },

    rewards: {
      redeemCartDiscountVoucher: async (
        body: schemas.RewardsRedeemCartDiscountVoucherRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/cart_discount_voucher/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemFreeShippingVoucher: async (
        body: schemas.RewardsRedeemFreeShippingVoucherRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/free_shipping_voucher/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemCollectionDiscountVoucher: async (
        body: schemas.RewardsRedeemCollectionDiscountVoucherRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/collection_discount_voucher/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemProductDiscountVoucher: async (
        body: schemas.RewardsRedeemProductDiscountVoucherRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/product_discount_voucher/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemGiftCard: async (
        body: schemas.RewardsRedeemGiftCardRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/gift_card/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemActiveSubscriptionDiscountVoucher: async (
        body: schemas.RewardsRedeemActiveSubscriptionDiscountVoucherRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/active_subscription_discount_voucher/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemActiveSubscriptionProduct: async (
        body: schemas.RewardsRedeemActiveSubscriptionProductRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/active_subscription_product/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      redeemProductCart: async (
        body: schemas.RewardsRedeemProductCartRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/product_cart/redeem",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
      refundProductCart: async (
        body: schemas.RewardsRefundProductCartRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rewards/product_cart/refund",
          {
            params: {
              path: {
                site_id: siteId,
              },
            },
            body,
          },
        );
      },
    },

    rules: {
      completeClickthrough: async (
        body: schemas.RulesCompleteClickthroughRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rules/clickthrough/complete",
          {
            params: {
              path: { site_id: siteId },
            },
            body,
          },
        );
      },
      completeFacebookLike: async (
        body: schemas.RulesCompleteFacebookLikeRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rules/facebook_like/complete",
          {
            params: {
              path: { site_id: siteId },
            },
            body,
          },
        );
      },
      completeInstagramFollow: async (
        body: schemas.RulesCompleteInstagramFollowRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rules/instagram_follow/complete",
          {
            params: {
              path: { site_id: siteId },
            },
            body,
          },
        );
      },
      completeTiktokFollow: async (
        body: schemas.RulesCompleteTiktokFollowRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rules/tiktok_follow/complete",
          {
            params: {
              path: { site_id: siteId },
            },
            body,
          },
        );
      },
      completeTwitterFollow: async (
        body: schemas.RulesCompleteTwitterFollowRequestBody,
      ) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rules/twitter_follow/complete",
          {
            params: {
              path: { site_id: siteId },
            },
            body,
          },
        );
      },
      completeCustom: async (body: schemas.RulesCompleteCustomRequestBody) => {
        return await client.POST(
          "/headless/2025-06/{site_id}/rules/custom/complete",
          {
            params: {
              path: { site_id: siteId },
            },
            body,
          },
        );
      },
    },
  };
}
