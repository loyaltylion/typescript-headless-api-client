export interface paths {
    "/headless/2025-06/{site_id}/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["configuration.getConfiguration"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/customers/{merchant_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["customers.getCustomer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/customers/{merchant_id}/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["customers.initializeSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/cart_discount_voucher/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemCartDiscountVoucher"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/free_shipping_voucher/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemFreeShippingVoucher"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/collection_discount_voucher/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemCollectionDiscountVoucher"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/product_discount_voucher/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemProductDiscountVoucher"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/gift_card/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemGiftCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/active_subscription_discount_voucher/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemActiveSubscriptionDiscountVoucher"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/active_subscription_product/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemActiveSubscriptionProduct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/custom/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemCustom"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/product_cart/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.redeemProductCart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/headless/2025-06/{site_id}/rewards/product_cart/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rewards.cancelProductCart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        SiteConfiguration: {
            /** @description The sales channel for which this response was generated */
            channel: components["schemas"]["SupportedChannel"];
            /**
             * @description `ISO 4217` code indicating the currency for any financial values in this response
             * @example usd
             */
            currency?: string;
            /**
             * @description `ISO 639-1` code indicating the language used for any text in this response
             * @enum {string}
             */
            language: "en" | "de" | "es" | "fr" | "it" | "nl" | "sv";
            program: {
                /**
                 * @description The name of the program
                 * @example Lion Rewards
                 */
                name: string;
            };
            /**
             * @description The tier configuration for the program, or `null` if tiers are not enabled
             * @example {
             *       "boundary_mode": "spend",
             *       "tiers": [
             *         {
             *           "id": 1,
             *           "name": "Silver",
             *           "benefit_ids": [
             *             1
             *           ],
             *           "hidden": false,
             *           "kind": "spend",
             *           "position": 1,
             *           "lower_bound": {
             *             "amount": 0,
             *             "formatted": "$0"
             *           },
             *           "upper_bound": {
             *             "amount": 99.99,
             *             "formatted": "$99.99"
             *           }
             *         },
             *         {
             *           "id": 2,
             *           "name": "Gold",
             *           "benefit_ids": [
             *             1,
             *             2
             *           ],
             *           "hidden": false,
             *           "kind": "spend",
             *           "position": 2,
             *           "lower_bound": {
             *             "amount": 100,
             *             "formatted": "$100"
             *           },
             *           "upper_bound": null
             *         }
             *       ],
             *       "tier_benefits": [
             *         {
             *           "id": 1,
             *           "label": "Early access to new products",
             *           "secret": false,
             *           "details": null
             *         },
             *         {
             *           "id": 2,
             *           "label": "Free makeup classes",
             *           "secret": false,
             *           "details": {
             *             "plaintext": "Email classes@example.com to sign up to a class\n",
             *             "html": "<p>Email classes@example.com to sign up to a class</p>"
             *           }
             *         }
             *       ],
             *       "membership": {
             *         "mode": "rolling",
             *         "duration_months": 12
             *       }
             *     }
             */
            tier_configuration: {
                /** @enum {string} */
                boundary_mode: "points" | "spend";
                tiers: (components["schemas"]["PointsTier"] | components["schemas"]["SpendTier"] | components["schemas"]["ConditionalTier"])[];
                tier_benefits: {
                    id: number;
                    /**
                     * @description A short label explaining what this tier benefit is
                     * @example Early access to new collections
                     */
                    label: string;
                    /**
                     * @description Indicates if this is a 'secret' tier benefit. Such benefits should only be shown if the current customer is already in the associated tier
                     * @example false
                     */
                    secret: boolean;
                    /** @description More details about this tier benefit as HTML and plaintext strings. Will be `null` if there are no additional details for this benefit */
                    details: {
                        /**
                         * @description More information about this benefit as basic plaintext string with line breaks
                         * @example Please email us (store@example.com) to receive this benefit
                         *
                         */
                        plaintext: string;
                        /**
                         * @description More information about this benefit. This can include simple HTML tags such as formatting, lists, and links
                         * @example <p>Please <a href='mailto:store@example.com'>email us</a> to receive this benefit</p>
                         */
                        html: string;
                    } | null;
                }[];
                /** @description Tier membership mode. Will be one of `rolling` (memberships expire after a duration) , `lifetime` (memberships don't expire), or `calendar` (memberships expire on a fixed date) */
                membership: components["schemas"]["TierMembershipRolling"] | components["schemas"]["TierMembershipCalendar"] | components["schemas"]["TierMembershipLifetime"];
            } | null;
            /** @description The referee incentive for the program, included only if one is enabled. This is a description of the incentive and does not include an actual voucher code, which is available through the referee incentive endpoint instead */
            referee_incentive?: components["schemas"]["RefereeIncentiveCartDiscount"] | components["schemas"]["RefereeIncentiveFreeShipping"];
            /** @description Ordered list of rules that belong to this site. Each rule will have  one or more variants that indicate its configuration and if it is enabled per tier. Rules have a `kind` property, and some kinds of rules will have `properties` that are specific to that rule kind */
            rules: (components["schemas"]["RuleBirthday"] | components["schemas"]["RuleCollectionPurchase"] | components["schemas"]["RuleNewsletterSignup"] | components["schemas"]["RulePageview"] | components["schemas"]["RuleProductPurchase"] | components["schemas"]["RulePurchase"] | components["schemas"]["RuleJoinProgram"] | components["schemas"]["RuleReview"] | components["schemas"]["RuleCustom"] | components["schemas"]["RuleFacebookLike"] | components["schemas"]["RuleTwitterFollow"] | components["schemas"]["RuleInstagramFollow"] | components["schemas"]["RuleInstagramMention"] | components["schemas"]["RuleInstagramPostHashtag"] | components["schemas"]["RuleTiktokFollow"] | components["schemas"]["RuleTiktokPostHashtag"] | components["schemas"]["RuleReferral"] | components["schemas"]["RuleClickthrough"])[];
            /** @description Ordered list of rewards that belong to this site. Each reward will have  one or more variants that indicate its configuration and if it is enabled per tier. Rewards have a `kind` property, and some kinds of rewards will have `properties` that are specific to that reward kind */
            rewards: (components["schemas"]["RewardGiftCard"] | components["schemas"]["RewardCartDiscountVoucher"] | components["schemas"]["RewardCartVariableDiscountVoucher"] | components["schemas"]["RewardFreeShippingVoucher"] | components["schemas"]["RewardProductDiscountVoucher"] | components["schemas"]["RewardCollectionDiscountVoucher"] | components["schemas"]["RewardProductCart"] | components["schemas"]["RewardActiveSubscriptionDiscountVoucher"] | components["schemas"]["RewardActiveSubscriptionProduct"] | components["schemas"]["RewardCustom"])[];
        };
        /** @enum {string} */
        SupportedChannel: "web" | "pos" | "mobile";
        CustomerEnrolled: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "enrolled";
            /** @description The ID of the customer in LoyaltyLion */
            id: number;
            /** @description The ID of the customer in your platform or ecommerce store */
            merchant_id: string;
            /** @description The email address of the customer. May be `null`, e.g. for POS customers who have never provided an email address */
            email: string | null;
            /** @description The first name of the customer, if available */
            first_name: string | null;
            /** @description The last name of the customer, if available */
            last_name: string | null;
            /** @description The number of approved points the customer can redeem for rewards */
            points_approved: number;
            /** @description The number of pending points the customer has. Pending points will be approved or declined at a later date */
            points_pending: number;
            /** @description The number of points the customer has spent to date */
            points_spent: number;
            /** @description `ISO 8601` timestamp representing when the customer enrolled in the program */
            enrolled_at: string;
            /** @description Details about this customer's current tier membership, or `null` if tiers are not enabled */
            tier_membership: {
                /** @description The ID of the tier this customer is currently in */
                tier_id: number;
                /**
                 * @description `ISO 8601` timestamp when this tier membership started
                 * @example 2025-01-01T12:00:00Z
                 */
                started_at: string;
                /**
                 * @description `ISO 8601` timestamp when this tier membership expires. Will be `null` if the membership never expires
                 * @example 2026-01-01T12:00:00Z
                 */
                expires_at: string | null;
                /** @description Information about the customer's tier progress, which can be used to inform a customer how close they are to reaching the next tier, or what they they need to do to maintain their current tier when it expires. Note that tier progress changes over time, as we use a sliding evaluation window to calculate progress, so it is only guaranteed to be correct as of the time of the response */
                progress: components["schemas"]["TierProgressPoints"] | components["schemas"]["TierProgressSpend"];
            } | null;
            /**
             * @description The customer's birthday, if one has been provided. Depending on how the program is configured, the `year` may or may not be included
             * @example {
             *       "month": 6,
             *       "day": 25
             *     }
             */
            birthday: {
                month: number;
                day: number;
                year?: number;
            } | null;
            /**
             * @description If the customer has provided their birthday, this will be an `ISO 8601` timestamp representing the date of their next (upcoming) birthday
             * @example 2025-06-25
             */
            next_birthday: string | null;
            /** @description The most recent 20 claimed rewards that belong to this customer. Claimed rewards can include a `redeemable`, which can be used to provide the reward to the customer. For example, voucher-based rewards will include a voucher code that could be displayed to the customer so they can apply it during checkout */
            claimed_rewards: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description The redeemable linked to this claimed reward, if any. If present, the redeemable can usually be used to provide the reward to the customer. For example, it may include a voucher code that can be shown to the customer, or details of a free product that can be added to the customer's cart directly */
                redeemable?: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "gift_card";
                    /** @description The last few characters of the gift card code. Note that the full gift card code is only shown once when the gift card reward is redeemed */
                    code_last_characters: string;
                    /**
                     * Currency
                     * @description The initial balance of the gift card
                     */
                    initial_balance: components["schemas"]["CurrencyAmount"];
                    /**
                     * Currency
                     * @description The current balance of the gift card
                     */
                    current_balance: components["schemas"]["CurrencyAmount"];
                    /** @description `ISO 8601` timestamp representing when the gift card will expire, or `null` if it does not expire */
                    expires_at: string | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "cart_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * @description The type of discount this voucher will apply to the cart
                     * @enum {string}
                     */
                    discount_type: "fixed" | "percentage";
                    /** @description The discount that will apply to the cart. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                    discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                    /**
                     * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                     * @example one_time
                     * @enum {string}
                     */
                    applies_to_order_type: "all" | "one_time" | "subscription";
                    /**
                     * @description The number of orders this discount will apply to, for discounts that can apply to subscription orders. If it's `1`, it means the discount will apply only to the first order with which it is used. If `null`, the discount will be applied to any number of orders for as long as it is active
                     * @example 1
                     */
                    recurring_cycle_limit: number | null;
                    /**
                     * Currency
                     * @description The minimum spend, if any, for the voucher to apply to the cart
                     */
                    minimum_spend: components["schemas"]["CurrencyAmount"] | null;
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "cart_variable_discount_voucher";
                    /**
                     * Currency
                     * @description The discount amount that was redeemed
                     */
                    discount: components["schemas"]["CurrencyAmount"];
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                     * @example one_time
                     * @enum {string}
                     */
                    applies_to_order_type: "all" | "one_time" | "subscription";
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "product_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /** @description The product that this discount applies to */
                    product: {
                        id: string;
                        image_url: string | null;
                        /** @description The variant ID to apply the discount to. If `null`, the discount can be applied to all this product's variants */
                        variant_id: string | null;
                    };
                    /**
                     * Percentage
                     * @description The discount that will apply to the product. Product discounts are always percentage based, so this will be a number from `1-100`
                     */
                    discount: components["schemas"]["PercentageAmount"];
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "free_shipping_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * Currency
                     * @description Free shipping will only be applied if the shipping rate is equal to or less than this amount, or `null` if there is no maximum
                     */
                    max_shipping: components["schemas"]["CurrencyAmount"] | null;
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "collection_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /** @description The collection that this discount applies to */
                    collection: {
                        id: string;
                        title: string | null;
                        url: string | null;
                    };
                    /**
                     * @description The type of discount this voucher will apply to items in the collection
                     * @enum {string}
                     */
                    discount_type: "fixed" | "percentage";
                    /** @description The discount that will apply to items in the collection. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                    discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                    /**
                     * Currency
                     * @description The minimum spend, if any, for the voucher to apply to the cart
                     */
                    minimum_spend: components["schemas"]["CurrencyAmount"] | null;
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "active_subscription_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * @description The type of discount this voucher will apply to next order
                     * @enum {string}
                     */
                    discount_type: "fixed" | "percentage";
                    /** @description The discount that will apply to the next order. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                    discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                    /** @description The number of recurring orders this discount will apply to. If `null`, the discount will be applied to any number of orders for as long as it is active */
                    recurring_cycle_limit: number | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "active_subscription_product";
                    /** @description The product and variant that will be included in the next subscription */
                    product: {
                        id: string;
                        title: string | null;
                        url: string | null;
                        image_url: string | null;
                        variant: {
                            id: string;
                            title: string | null;
                        };
                    };
                    /** @description The quantity of the product that will be included in the next subscription */
                    quantity: number;
                    subscription_details: components["schemas"]["ActiveSubscriptionProductRedeemableSubscriptionDetailsRecharge"];
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "product_cart";
                    /** @description The product and variant that should be added to the cart */
                    product: {
                        id: string;
                        title: string | null;
                        url: string | null;
                        image_url: string | null;
                        variant: {
                            id: string;
                            title: string | null;
                        };
                    };
                    /** @description The quantity of the product that should be added to the cart */
                    quantity: number;
                    /** @description `ISO 8601` timestamp representing when the product was used in an order, or `null` if not yet used */
                    used_at: string | null;
                    /** @description The unique cart line identifier, which connects this redemption to the line item in the eventual completed order. For Shopify, this identifier is used as the value of the `__lion_sfp_id` attribute on the cart line when the product is added to the cart */
                    cart_line_identifier: string;
                    /** @description The active cart redemption associated with this product reward, if any. A product reward will have an active cart redemption if it has been redeemed and has not yet been checked out with an order, or expired */
                    active_cart_redemption: {
                        /** @description The unique ID of this cart redemption. This ID needs to be attached to the cart line when the product is added to the cart. For Shopify, this is used as the value of the `__lion_sfp_id` attribute on the cart line */
                        id: string;
                        /** @description The ID of the claimed reward that this cart redemption is associated with */
                        claimed_reward_id: number;
                        /** @description `ISO 8601` timestamp representing when this cart redemption will expire if it has not been checked out, at which point any associated points will be returned to the customer */
                        expires_at: string;
                        /** @description The product and variant that this cart redemption is for */
                        product: {
                            id: string;
                            title: string | null;
                            url: string | null;
                            image_url: string | null;
                            variant: {
                                id: string;
                                title: string | null;
                            };
                        };
                        /** @description The quantity of the line item in this cart redemption */
                        quantity: number;
                        /** @description The ID of the cart for which this cart redemption was initially redeemed */
                        cart_id: string;
                        cart_line: components["schemas"]["ActiveCartRedemptionCartLineShopify"];
                        /** @description If this request included a serialized `cart` object whose `id` matches the `cart_id` of this redemption, this object includes information about this redemption's state in the current cart. It will be `null` if the request did not include a serialized cart or its `id` does not match */
                        current_cart_state: {
                            /** @description Indicates if the redemption is currently in the cart */
                            in_cart: boolean;
                            /** @description Indicates if all this redemption's requirements are currently met by the cart, such as a required minimum cart total or number of line items */
                            cart_requirements_met: boolean;
                            cart_requirements_detail: {
                                minimum_cart_total: components["schemas"]["CartRequirementsDetailMinimumCartTotalNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementNotMet"];
                                minimum_line_item_quantity: components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementNotMet"];
                            };
                        } | null;
                    } | null;
                } | {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "custom";
                    /** @description Optional fulfillment explanation as a short, plaintext string. If present, this will explain to the customer how and when the reward will be fulfilled */
                    fulfilment_explanation: string | null;
                    /** @description `ISO 8601` timestamp representing when this custom redeemable was fulfilled, or `null` if it is not yet fulfilled */
                    fulfilled_at: string | null;
                };
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
            }[];
            /** @description A list of rewards that are enabled for this customer, based on their tier. This is the same as the list of rewards returned from [Get Configuration](/headless-api/2025-06/configuration/get-configuration), with a few differences:
             *
             *     - instead of `variants`, each reward will have a `variant` property, which represents the applicable variant for this customer based on their tier. If there is no applicable enabled variant, the reward will not be included in this list, e.g. if it's disabled for the customer's current tier
             *     - each reward will have a `context` property, which includes information about the reward specific to this customer, such as the number of times they have claimed it, and if any limit is in effect. The `can_redeem` property is a quick way to determine if the customer is able to redeem the reward
             *
             *     Note that the inclusion of a reward here does not mean it the customer can redeem it: they must have enough points, and it must not have reached its claim limit. You can determine this yourself, or use the `context.can_redeem` property */
            available_rewards: (components["schemas"]["CustomerAvailableRewardGiftCard"] | components["schemas"]["CustomerAvailableRewardCartDiscountVoucher"] | components["schemas"]["CustomerAvailableRewardCartVariableDiscountVoucher"] | components["schemas"]["CustomerAvailableRewardFreeShippingVoucher"] | components["schemas"]["CustomerAvailableRewardProductDiscountVoucher"] | components["schemas"]["CustomerAvailableRewardCollectionDiscountVoucher"] | components["schemas"]["CustomerAvailableRewardProductCart"] | components["schemas"]["CustomerAvailableRewardActiveSubscriptionDiscountVoucher"] | components["schemas"]["CustomerAvailableRewardActiveSubscriptionProduct"] | components["schemas"]["CustomerAvailableRewardCustom"])[];
            /** @description A list of rules that are enabled for this customer, based on their tier. This is the same as the list of rules returned from [Get Configuration](/headless-api/2025-06/configuration/get-configuration), with a few differences:
             *
             *     - instead of `variants`, each rule will have a `variant` property, which represents the applicable variant for this customer based on their tier. If there is no applicable enabled variant, the rule will not be included in this list, e.g. if it's disabled for the customer's current tier
             *     - each rule will have a `context` property, which includes information about this customer's interaction with the rule, such as the number of times they have completed it, and if any limit is in effect */
            available_rules: (components["schemas"]["CustomerAvailableRuleBirthday"] | components["schemas"]["CustomerAvailableRuleCollectionPurchase"] | components["schemas"]["CustomerAvailableRuleNewsletterSignup"] | components["schemas"]["CustomerAvailableRulePageview"] | components["schemas"]["CustomerAvailableRuleProductPurchase"] | components["schemas"]["CustomerAvailableRulePurchase"] | components["schemas"]["CustomerAvailableRuleJoinProgram"] | components["schemas"]["CustomerAvailableRuleReview"] | components["schemas"]["CustomerAvailableRuleCustom"] | components["schemas"]["CustomerAvailableRuleFacebookLike"] | components["schemas"]["CustomerAvailableRuleTwitterFollow"] | components["schemas"]["CustomerAvailableRuleInstagramFollow"] | components["schemas"]["CustomerAvailableRuleInstagramMention"] | components["schemas"]["CustomerAvailableRuleInstagramPostHashtag"] | components["schemas"]["CustomerAvailableRuleTiktokFollow"] | components["schemas"]["CustomerAvailableRuleTiktokPostHashtag"] | components["schemas"]["CustomerAvailableRuleReferral"] | components["schemas"]["CustomerAvailableRuleClickthrough"])[];
            /** @description A list of active cart redemptions. When a `product_cart` reward is redeemed by the customer, a new active cart redemption is created. This will persist until it expires or the completes the order */
            active_cart_redemptions: {
                /** @description The unique ID of this cart redemption. This ID needs to be attached to the cart line when the product is added to the cart. For Shopify, this is used as the value of the `__lion_sfp_id` attribute on the cart line */
                id: string;
                /** @description The ID of the claimed reward that this cart redemption is associated with */
                claimed_reward_id: number;
                /** @description `ISO 8601` timestamp representing when this cart redemption will expire if it has not been checked out, at which point any associated points will be returned to the customer */
                expires_at: string;
                /** @description The product and variant that this cart redemption is for */
                product: {
                    id: string;
                    title: string | null;
                    url: string | null;
                    image_url: string | null;
                    variant: {
                        id: string;
                        title: string | null;
                    };
                };
                /** @description The quantity of the line item in this cart redemption */
                quantity: number;
                /** @description The ID of the cart for which this cart redemption was initially redeemed */
                cart_id: string;
                cart_line: components["schemas"]["ActiveCartRedemptionCartLineShopify"];
                /** @description If this request included a serialized `cart` object whose `id` matches the `cart_id` of this redemption, this object includes information about this redemption's state in the current cart. It will be `null` if the request did not include a serialized cart or its `id` does not match */
                current_cart_state: {
                    /** @description Indicates if the redemption is currently in the cart */
                    in_cart: boolean;
                    /** @description Indicates if all this redemption's requirements are currently met by the cart, such as a required minimum cart total or number of line items */
                    cart_requirements_met: boolean;
                    cart_requirements_detail: {
                        minimum_cart_total: components["schemas"]["CartRequirementsDetailMinimumCartTotalNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementNotMet"];
                        minimum_line_item_quantity: components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementNotMet"];
                    };
                } | null;
            }[];
            /** @description Referral URLs for different platforms, unique to this customer, or `null` if referrals are not enabled. Each URL has the same referral functionality, but will result in the referral being tracked for its platform. If unsure, use the `direct` URL for a generic link */
            referral_urls: {
                /** @description A generic referral link that is not associated with any particular platform */
                direct: string;
                /** @description A referral link intended for sharing on Facebook */
                facebook: string;
                /** @description A referral link intended for sharing on Twitter */
                twitter: string;
                /** @description A referral link intended for sharing via email */
                email: string;
                /** @description A referral link intended for sharing via WhatsApp */
                whatsapp: string;
                /** @description A referral link intended for sharing via a mobile device share prompt */
                device_share: string;
            } | null;
        };
        CustomerGuest: {
            /** @description The ID of the customer in LoyaltyLion */
            id: number;
            /** @description The ID of the customer in your platform or ecommerce store */
            merchant_id: string;
            /** @description The email address of the customer. May be `null`, e.g. for POS customers who have never provided an email address */
            email: string | null;
            /** @description The first name of the customer, if available */
            first_name: string | null;
            /** @description The last name of the customer, if available */
            last_name: string | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "guest";
        };
        CustomerBlocked: {
            /** @description The ID of the customer in LoyaltyLion */
            id: number;
            /** @description The ID of the customer in your platform or ecommerce store */
            merchant_id: string;
            /** @description The email address of the customer. May be `null`, e.g. for POS customers who have never provided an email address */
            email: string | null;
            /** @description The first name of the customer, if available */
            first_name: string | null;
            /** @description The last name of the customer, if available */
            last_name: string | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "blocked";
        };
        /** @example {
         *       "channel": "web",
         *       "currency": "usd",
         *       "language": "en",
         *       "customer": {
         *         "state": "enrolled",
         *         "id": 1,
         *         "merchant_id": "1001",
         *         "email": "alice@example.com",
         *         "first_name": "Alice",
         *         "last_name": "Kyako",
         *         "points_approved": 500,
         *         "points_pending": 200,
         *         "points_spent": 500,
         *         "enrolled_at": "2025-06-01T15:00:00Z",
         *         "tier_membership": {
         *           "tier_id": 1,
         *           "started_at": "2025-06-01T15:00:00Z",
         *           "expires_at": "2026-06-01T15:00:00Z",
         *           "progress": {
         *             "kind": "spend",
         *             "tier_spend": {
         *               "now": {
         *                 "amount": 200,
         *                 "formatted": "$200"
         *               },
         *               "at_expiration": {
         *                 "amount": 100,
         *                 "formatted": "$100"
         *               }
         *             },
         *             "valid_until": "2026-06-01T15:00:00Z",
         *             "upgrade_tier_id": 2,
         *             "spend_needed_for_renewal": null,
         *             "spend_needed_for_upgrade": {
         *               "amount": 800,
         *               "formatted": "$800"
         *             }
         *           }
         *         },
         *         "birthday": {
         *           "day": 22,
         *           "month": 6
         *         },
         *         "next_birthday": "2026-06-22",
         *         "claimed_rewards": [
         *           {
         *             "id": 1,
         *             "claimed_at": "2025-06-03T00:00:00Z",
         *             "auto_refund_at": null,
         *             "reward_id": 1,
         *             "title": "$5 discount",
         *             "state": "approved",
         *             "source": {
         *               "kind": "points_redemption",
         *               "points_cost": 500
         *             },
         *             "redeemable": {
         *               "kind": "cart_discount_voucher",
         *               "applies_to_order_type": "all",
         *               "recurring_cycle_limit": 1,
         *               "code": "LL-XAIA8471",
         *               "discount_type": "fixed",
         *               "discount": {
         *                 "amount": 5,
         *                 "formatted": "$5"
         *               },
         *               "minimum_spend": {
         *                 "amount": 50,
         *                 "formatted": "$50"
         *               },
         *               "expires_at": "2026-06-03T00:00:00Z",
         *               "used_at": null,
         *               "usage_status": "not_used"
         *             }
         *           }
         *         ],
         *         "available_rules": [
         *           {
         *             "id": 1,
         *             "kind": "pageview",
         *             "limit": {
         *               "count": 5,
         *               "interval": "day"
         *             },
         *             "variant": {
         *               "tier_id": 1,
         *               "enabled": true,
         *               "title": "Visit our online store",
         *               "result": {
         *                 "kind": "points",
         *                 "per_currency_unit": null,
         *                 "points": 10
         *               },
         *               "result_short_text": "10 points"
         *             },
         *             "context": {
         *               "last_completed_at": "2025-06-10T05:08:37.582Z",
         *               "completion_count": 22,
         *               "completion_limit": {
         *                 "state": "limit_not_reached",
         *                 "interval": "day",
         *                 "allowed_completions_within_interval": 5,
         *                 "completion_count_within_interval": 3,
         *                 "remaining_completions_within_interval": 2
         *               }
         *             }
         *           },
         *           {
         *             "id": 2,
         *             "kind": "join_program",
         *             "limit": {
         *               "count": 1,
         *               "interval": null
         *             },
         *             "variant": {
         *               "tier_id": 1,
         *               "enabled": true,
         *               "title": "Join our loyalty program",
         *               "result": {
         *                 "kind": "points",
         *                 "per_currency_unit": null,
         *                 "points": 100
         *               },
         *               "result_short_text": "100 points"
         *             },
         *             "context": {
         *               "last_completed_at": "2025-06-10T07:44:24.537Z",
         *               "completion_count": 1,
         *               "completion_limit": {
         *                 "state": "limit_reached_forever"
         *               }
         *             }
         *           },
         *           {
         *             "id": 3,
         *             "kind": "purchase",
         *             "limit": null,
         *             "variant": {
         *               "tier_id": 1,
         *               "enabled": true,
         *               "title": "Make a purchase",
         *               "result": {
         *                 "kind": "points",
         *                 "per_currency_unit": 1,
         *                 "points": 5
         *               },
         *               "result_short_text": "5 points per $1"
         *             },
         *             "context": {
         *               "last_completed_at": "2025-06-10T05:08:37.582Z",
         *               "completion_count": 3,
         *               "completion_limit": {
         *                 "state": "no_limit"
         *               }
         *             }
         *           }
         *         ],
         *         "available_rewards": [
         *           {
         *             "id": 1,
         *             "kind": "cart_discount_voucher",
         *             "limit": null,
         *             "properties": {
         *               "discount_type": "fixed",
         *               "discount": {
         *                 "amount": 5,
         *                 "formatted": "$5"
         *               },
         *               "applies_to_order_type": "one_time",
         *               "recurring_cycle_limit": 1,
         *               "minimum_spend": {
         *                 "amount": 10,
         *                 "formatted": "$10"
         *               }
         *             },
         *             "variant": {
         *               "tier_id": 1,
         *               "enabled": true,
         *               "title": "$5 discount",
         *               "cost": {
         *                 "kind": "fixed",
         *                 "points": 500
         *               },
         *               "cost_text": "500 points"
         *             },
         *             "context": {
         *               "can_redeem": {
         *                 "state": "redeemable"
         *               },
         *               "last_claimed_at": "2025-06-03T00:00:00Z",
         *               "claim_count": 1,
         *               "claim_limit": {
         *                 "state": "no_limit"
         *               }
         *             }
         *           },
         *           {
         *             "id": 2,
         *             "kind": "cart_discount_voucher",
         *             "limit": null,
         *             "properties": {
         *               "discount_type": "percentage",
         *               "discount": {
         *                 "percentage": 10,
         *                 "formatted": "10%"
         *               },
         *               "applies_to_order_type": "one_time",
         *               "recurring_cycle_limit": 1,
         *               "minimum_spend": {
         *                 "amount": 50,
         *                 "formatted": "$50"
         *               }
         *             },
         *             "variant": {
         *               "tier_id": 1,
         *               "enabled": true,
         *               "title": "10% discount",
         *               "cost": {
         *                 "kind": "fixed",
         *                 "points": 1000
         *               },
         *               "cost_text": "1,000 points"
         *             },
         *             "context": {
         *               "can_redeem": {
         *                 "state": "insufficient_points",
         *                 "additional_points_required": 500
         *               },
         *               "last_claimed_at": null,
         *               "claim_count": 0,
         *               "claim_limit": {
         *                 "state": "no_limit"
         *               }
         *             }
         *           }
         *         ],
         *         "active_cart_redemptions": [],
         *         "referral_urls": {
         *           "email": "https://prz.io/_",
         *           "direct": "https://prz.io/_",
         *           "facebook": "https://prz.io/_",
         *           "twitter": "https://prz.io/_",
         *           "whatsapp": "https://prz.io/_",
         *           "device_share": "https://prz.io/_"
         *         }
         *       },
         *       "configuration": {
         *         "channel": "web",
         *         "currency": "usd",
         *         "language": "en",
         *         "program": {
         *           "name": "Lion Rewards"
         *         },
         *         "tier_configuration": {
         *           "boundary_mode": "spend",
         *           "tiers": [
         *             {
         *               "id": 1,
         *               "name": "Silver",
         *               "benefit_ids": [
         *                 1
         *               ],
         *               "hidden": false,
         *               "kind": "spend",
         *               "position": 1,
         *               "lower_bound": {
         *                 "amount": 0,
         *                 "formatted": "$0"
         *               },
         *               "upper_bound": {
         *                 "amount": 99.99,
         *                 "formatted": "$99.99"
         *               }
         *             },
         *             {
         *               "id": 2,
         *               "name": "Gold",
         *               "benefit_ids": [
         *                 1,
         *                 2
         *               ],
         *               "hidden": false,
         *               "kind": "spend",
         *               "position": 2,
         *               "lower_bound": {
         *                 "amount": 100,
         *                 "formatted": "$100"
         *               },
         *               "upper_bound": null
         *             }
         *           ],
         *           "tier_benefits": [
         *             {
         *               "id": 1,
         *               "label": "Early access to new products",
         *               "secret": false,
         *               "details": null
         *             },
         *             {
         *               "id": 2,
         *               "label": "Free makeup classes",
         *               "secret": false,
         *               "details": {
         *                 "plaintext": "Email classes@example.com to sign up to a class\n",
         *                 "html": "<p>Email classes@example.com to sign up to a class</p>"
         *               }
         *             }
         *           ],
         *           "membership": {
         *             "mode": "rolling",
         *             "duration_months": 12
         *           }
         *         },
         *         "referee_incentive": {
         *           "minimum_spend": {
         *             "amount": 100,
         *             "formatted": "$100"
         *           },
         *           "incentive_text": "Get a 10% discount on your order with this code when you spend over $100",
         *           "kind": "cart_discount_voucher",
         *           "discount_kind": "percentage",
         *           "discount": {
         *             "percentage": 10,
         *             "formatted": "10%"
         *           }
         *         },
         *         "rules": [
         *           {
         *             "id": 1,
         *             "kind": "purchase",
         *             "variants": [
         *               {
         *                 "tier_id": 1,
         *                 "enabled": true,
         *                 "title": "Make a purchase",
         *                 "result": {
         *                   "kind": "points",
         *                   "per_currency_unit": 1,
         *                   "points": 5
         *                 },
         *                 "result_short_text": "5 points per $1"
         *               },
         *               {
         *                 "tier_id": 2,
         *                 "enabled": true,
         *                 "title": "Make a purchase",
         *                 "result": {
         *                   "kind": "points",
         *                   "per_currency_unit": 1,
         *                   "points": 10
         *                 },
         *                 "result_short_text": "10 points per $1"
         *               }
         *             ],
         *             "limit": null
         *           },
         *           {
         *             "id": 2,
         *             "kind": "pageview",
         *             "variants": [
         *               {
         *                 "tier_id": 1,
         *                 "enabled": true,
         *                 "title": "Visit our online store",
         *                 "result": {
         *                   "kind": "points",
         *                   "per_currency_unit": null,
         *                   "points": 100
         *                 },
         *                 "result_short_text": "100 points"
         *               },
         *               {
         *                 "tier_id": 2,
         *                 "enabled": true,
         *                 "title": "Visit our online store",
         *                 "result": {
         *                   "kind": "points",
         *                   "per_currency_unit": null,
         *                   "points": 200
         *                 },
         *                 "result_short_text": "200 points"
         *               }
         *             ],
         *             "limit": {
         *               "count": 1,
         *               "interval": "week"
         *             }
         *           }
         *         ],
         *         "rewards": [
         *           {
         *             "id": 1,
         *             "kind": "cart_discount_voucher",
         *             "properties": {
         *               "discount_type": "fixed",
         *               "discount": {
         *                 "amount": 5,
         *                 "formatted": "$5"
         *               },
         *               "applies_to_order_type": "one_time",
         *               "recurring_cycle_limit": 1,
         *               "minimum_spend": {
         *                 "amount": 10,
         *                 "formatted": "$10"
         *               }
         *             },
         *             "variants": [
         *               {
         *                 "tier_id": 1,
         *                 "enabled": true,
         *                 "title": "$5 discount",
         *                 "cost": {
         *                   "kind": "fixed",
         *                   "points": 500
         *                 },
         *                 "cost_text": "500 points"
         *               },
         *               {
         *                 "tier_id": 2,
         *                 "enabled": true,
         *                 "title": "$5 discount",
         *                 "cost": {
         *                   "kind": "fixed",
         *                   "points": 400
         *                 },
         *                 "cost_text": "400 points"
         *               }
         *             ],
         *             "limit": null
         *           },
         *           {
         *             "id": 2,
         *             "kind": "cart_variable_discount_voucher",
         *             "properties": {
         *               "minimum_discount": {
         *                 "amount": 1,
         *                 "formatted": "$1"
         *               },
         *               "maximum_discount": {
         *                 "amount": 100,
         *                 "formatted": "$100"
         *               },
         *               "applies_to_order_type": "all",
         *               "minimum_spend_before_discount": null,
         *               "minimum_spend_after_discount": null
         *             },
         *             "variants": [
         *               {
         *                 "tier_id": 1,
         *                 "enabled": false,
         *                 "title": "Redeem points at checkout",
         *                 "cost": {
         *                   "kind": "variable",
         *                   "unit": "discount_amount",
         *                   "points_per_unit": 100
         *                 },
         *                 "cost_text": "100 points per $1"
         *               },
         *               {
         *                 "tier_id": 2,
         *                 "enabled": true,
         *                 "title": "Redeem points at checkout",
         *                 "cost": {
         *                   "kind": "variable",
         *                   "unit": "discount_amount",
         *                   "points_per_unit": 100
         *                 },
         *                 "cost_text": "100 points per $1"
         *               }
         *             ],
         *             "limit": null
         *           }
         *         ]
         *       }
         *     } */
        CustomersGetCustomerResponseBody: {
            /** @description The sales channel for which this response was generated */
            channel: components["schemas"]["SupportedChannel"];
            /**
             * @description `ISO 4217` code indicating the currency for any financial values in this response
             * @example usd
             */
            currency?: string;
            /**
             * @description `ISO 639-1` code indicating the language used for any text in this response
             * @enum {string}
             */
            language: "en" | "de" | "es" | "fr" | "it" | "nl" | "sv";
            /** @description The customer matched by `merchant_id`. The customer's `state` property indicates if the customer is a member of the program (`enrolled`), not a member (`guest`), or has been blocked from the program (`blocked`) */
            customer: components["schemas"]["CustomerEnrolled"] | components["schemas"]["CustomerGuest"] | components["schemas"]["CustomerBlocked"];
            /** @description The complete program configuration. This is the same configuration that is returned by the [Get Configuration](/headless-api/2025-06/configuration/get-configuration) endpoint */
            configuration: components["schemas"]["SiteConfiguration"];
        };
        CartEmpty: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "empty";
        };
        CartShopify: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "shopify";
            /**
             * @description The unique ID of the cart, used to find redemptions that are associated with this cart
             * @example gid://shopify/Cart/Z2NwLWV1cm
             */
            id: string;
            cost: {
                total_amount: {
                    /**
                     * @description The total amount for the customer to pay, as a decimal money amount. From `cost.totalAmount.amount` on the [Storefront API Cart object](https://shopify.dev/docs/api/storefront/latest/objects/Cart)
                     * @example 99.95
                     */
                    amount: string;
                    /**
                     * @description The currency for the total amount for the customer to pay. From `cost.totalAmount.currencyCode` on the [Storefront API Cart object](https://shopify.dev/docs/api/storefront/latest/objects/Cart)
                     * @example USD
                     */
                    currency_code: string;
                };
            };
            lines: {
                /** @description The ID for the cart line. From `id` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline) */
                id: string;
                /** @description The quantity of the merchandise the customer intends to purchase. From `quantity` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline) */
                quantity: number;
                cost: {
                    total_amount: {
                        /**
                         * @description The cost of the merchandise, as a decimal money amount. From `cost.totalAmount.amount` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline)
                         * @example 99.95
                         */
                        amount: string;
                        /**
                         * @description The currency for the total amount for the customer to pay. From `cost.totalAmount.currencyCode` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline)
                         * @example USD
                         */
                        currency_code: string;
                    };
                    amount_per_quantity: {
                        /**
                         * @description The cost of the merchandise, as a decimal money amount. From `cost.amountPerQuantity.amount` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline)
                         * @example 99.95
                         */
                        amount: string;
                        /**
                         * @description The currency for the total amount for the customer to pay. From `cost.amountPerQuantity.currencyCode` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline)
                         * @example USD
                         */
                        currency_code: string;
                    };
                };
                merchandise: {
                    /**
                     * @description The ID of the merchandise. From `merchandise.id` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline)
                     * @example gid://shopify/ProductVariant/1001
                     */
                    id: string;
                };
                /**
                 * @description The attributes associated with the cart line as an array of key-value pairs. From `attributes` on the [Storefront API CartLine object](https://shopify.dev/docs/api/storefront/latest/objects/cartline)
                 * @example [
                 *       {
                 *         "key": "customersFirstOrder",
                 *         "value": "true"
                 *       }
                 *     ]
                 */
                attributes: {
                    key: string;
                    value: string | null;
                }[];
            }[];
        };
        RecommendedCartActionRemoveCartLine: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "remove_cart_line";
            /**
             * @description An enum indicating the reason the cart line should be removed
             * @enum {string}
             */
            reason: "redemption_expired" | "redemption_cart_requirements_not_met";
            /** @description Details about the cart line that should be removed from the cart */
            cart_line_to_remove: components["schemas"]["RecommendedCartActionShopifyCartLine"];
            /** @description Details about the associated cart redemption. Because this cart redemption is no longer active, it won't be included in the `active_cart_redemptions` array in the Customer object */
            cart_redemption: {
                /**
                 * @description The ID of the redemption
                 * @example A7EB
                 */
                id: string;
            };
        };
        CustomersInitializeSessionResponseBody: {
            /** @description The sales channel for which this response was generated */
            channel: components["schemas"]["SupportedChannel"];
            /**
             * @description `ISO 4217` code indicating the currency for any financial values in this response
             * @example usd
             */
            currency?: string;
            /**
             * @description `ISO 639-1` code indicating the language used for any text in this response
             * @enum {string}
             */
            language: "en" | "de" | "es" | "fr" | "it" | "nl" | "sv";
            /** @description The customer matched by `merchant_id`. The customer's `state` property indicates if the customer is a member of the program (`enrolled`), not a member (`guest`), or has been blocked from the program (`blocked`) */
            customer: components["schemas"]["CustomerEnrolled"] | components["schemas"]["CustomerGuest"] | components["schemas"]["CustomerBlocked"];
            /** @description The complete program configuration. This is the same configuration that is returned by the [Get Configuration](/headless-api/2025-06/configuration/get-configuration) endpoint */
            configuration: components["schemas"]["SiteConfiguration"];
            /** @description If you included a serialized cart with the request, this may contain a list of requested actions to do with the cart, such as removing any reward items that are no longer valid */
            requested_cart_actions: components["schemas"]["RecommendedCartActionRemoveCartLine"][];
        };
        InitializeSessionErrorEmailAlreadyInUse: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "email_already_in_use";
        };
        CustomersInitializeSessionRequestBody: {
            /** @description The customer involved in this session. If the customer does not yet exist in LoyaltyLion, they will be created with these properties */
            customer: {
                /**
                 * Format: email
                 * @example alice@example.com
                 */
                email: string;
            };
            /** @description Additional information about this session, which can facilitate triggering rules, or improve program analytics */
            session?: {
                /**
                 * @description The URL of the page the customer is currently viewing. This must be provided to trigger any relevant 'pageview' rules
                 * @example https://store.example.com/products/100
                 */
                page_url?: string;
            };
            /** @description If you're using cart-based rewards (like free products), you should provide a serialized version of the current customer cart here. This is used to determine which rewards are eligible for the current cart (taking cart requirements into account), and also to remove and refund any product redemptions that are no longer valid
             *
             *     If the current cart is empty, or does not yet exist (typical on Shopify, before the the shopper has interacted with the cart), you should pass `{ "kind": "empty" }` to explicitly indicate an empty cart for the purposes of cart requirements
             *
             *     When passing a cart, check the `requested_cart_actions` field in the response for any actions you should perform with the cart, such as removing any reward product lines that are no longer valid */
            cart?: components["schemas"]["CartEmpty"] | components["schemas"]["CartShopify"];
        };
        ClaimedRewardSourcePointsRedemption: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "points_redemption";
            /** @description The number of points the customer used to claim this reward */
            points_cost: number;
        };
        ClaimedRewardSourceRuleCompletion: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "rule_completion";
            rule_id: number;
        };
        ClaimedRewardSourceTierEntry: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "tier_entry";
            tier_id: number;
        };
        CurrencyAmount: {
            /**
             * @description Currency amount as a numeric value. This may be an integer or a float depending on the value and the currency. Currencies that do not use a decimal point will always be an integer
             * @example 9.9
             */
            amount: number;
            /**
             * @description Formatted amount as string with currency symbol, e.g. `$50` or `$10.50`
             * @example $9.90
             */
            formatted: string;
        };
        PercentageAmount: {
            /**
             * @description Percentage as a number from 0 to 100
             * @example 10
             */
            percentage: number;
            /**
             * @description Formatted percentage as string, e.g. "5%" or "100%"
             * @example 10%
             */
            formatted: string;
        };
        RewardsRedeemCartDiscountVoucherResponseBody: {
            /**
             * @description The unique voucher code that will apply the discount
             * @example LL-XYA3816
             */
            voucher_code: string;
            /** @description The new claimed reward. The voucher code can also be found in `claimed_reward.redeemable.code` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "cart_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * @description The type of discount this voucher will apply to the cart
                     * @enum {string}
                     */
                    discount_type: "fixed" | "percentage";
                    /** @description The discount that will apply to the cart. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                    discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                    /**
                     * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                     * @example one_time
                     * @enum {string}
                     */
                    applies_to_order_type: "all" | "one_time" | "subscription";
                    /**
                     * @description The number of orders this discount will apply to, for discounts that can apply to subscription orders. If it's `1`, it means the discount will apply only to the first order with which it is used. If `null`, the discount will be applied to any number of orders for as long as it is active
                     * @example 1
                     */
                    recurring_cycle_limit: number | null;
                    /**
                     * Currency
                     * @description The minimum spend, if any, for the voucher to apply to the cart
                     */
                    minimum_spend: components["schemas"]["CurrencyAmount"] | null;
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RedeemRewardErrorInsufficientPoints: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "insufficient_points";
            message?: string;
        };
        RedeemRewardErrorCustomerNotEnrolled: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "customer_not_enrolled";
            message?: string;
        };
        RedeemRewardErrorCustomerBlocked: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "customer_blocked";
            message?: string;
        };
        RedeemRewardErrorRewardNotEnabledForCustomer: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "reward_not_enabled_for_customer";
            message?: string;
        };
        RedeemRewardErrorRewardOutOfStock: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "reward_out_of_stock";
            message?: string;
        };
        RedeemRewardErrorRewardInvalidKind: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "reward_kind_mismatch";
            message?: string;
        };
        RedeemRewardErrorRewardLimitReached: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "reward_limit_reached";
            message?: string;
        };
        RewardsRedeemCartDiscountVoucherRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
        };
        RewardsRedeemFreeShippingVoucherResponseBody: {
            /**
             * @description The unique voucher code that will apply free shipping
             * @example LL-XYA3816
             */
            voucher_code: string;
            /** @description The new claimed reward. The voucher code can be found in `claimed_reward.redeemable.code` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "free_shipping_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * Currency
                     * @description Free shipping will only be applied if the shipping rate is equal to or less than this amount, or `null` if there is no maximum
                     */
                    max_shipping: components["schemas"]["CurrencyAmount"] | null;
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RewardsRedeemFreeShippingVoucherRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
        };
        RewardsRedeemCollectionDiscountVoucherResponseBody: {
            /**
             * @description The unique voucher code that will apply the discount
             * @example LL-XYA3816
             */
            voucher_code: string;
            /** @description The new claimed reward. The voucher code can be found in `claimed_reward.redeemable.code` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "collection_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /** @description The collection that this discount applies to */
                    collection: {
                        id: string;
                        title: string | null;
                        url: string | null;
                    };
                    /**
                     * @description The type of discount this voucher will apply to items in the collection
                     * @enum {string}
                     */
                    discount_type: "fixed" | "percentage";
                    /** @description The discount that will apply to items in the collection. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                    discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                    /**
                     * Currency
                     * @description The minimum spend, if any, for the voucher to apply to the cart
                     */
                    minimum_spend: components["schemas"]["CurrencyAmount"] | null;
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RewardsRedeemCollectionDiscountVoucherRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
        };
        RewardsRedeemProductDiscountVoucherResponseBody: {
            /**
             * @description The unique voucher code that will apply the discount
             * @example LL-XYA3816
             */
            voucher_code: string;
            /** @description The new claimed reward. The voucher code can be found in `claimed_reward.redeemable.code` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "product_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /** @description The product that this discount applies to */
                    product: {
                        id: string;
                        image_url: string | null;
                        /** @description The variant ID to apply the discount to. If `null`, the discount can be applied to all this product's variants */
                        variant_id: string | null;
                    };
                    /**
                     * Percentage
                     * @description The discount that will apply to the product. Product discounts are always percentage based, so this will be a number from `1-100`
                     */
                    discount: components["schemas"]["PercentageAmount"];
                    /** @description ISO 8601 timestamp representing when the voucher will expire, or `null` if it does not expire */
                    expires_at: string | null;
                    /** @description `ISO 8601` timestamp representing when the voucher was used, or `null` if not yet used */
                    used_at: string | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RewardsRedeemProductDiscountVoucherRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
        };
        RewardsRedeemGiftCardResponseBody: {
            /**
             * @description The full gift card code. This is the only time the full code can be seen through the API
             * @example 8c88rfd8t8d6yxp9
             */
            gift_card_code: string;
            /** @description The new claimed reward. The last few characters of the gift card code can be found in `claimed_reward.redeemable.code_last_characters` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "gift_card";
                    /** @description The last few characters of the gift card code. Note that the full gift card code is only shown once when the gift card reward is redeemed */
                    code_last_characters: string;
                    /**
                     * Currency
                     * @description The initial balance of the gift card
                     */
                    initial_balance: components["schemas"]["CurrencyAmount"];
                    /**
                     * Currency
                     * @description The current balance of the gift card
                     */
                    current_balance: components["schemas"]["CurrencyAmount"];
                    /** @description `ISO 8601` timestamp representing when the gift card will expire, or `null` if it does not expire */
                    expires_at: string | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RewardsRedeemGiftCardRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
        };
        RewardsRedeemActiveSubscriptionDiscountVoucherResponseBody: {
            /**
             * @description The unique voucher code that will apply the discount. This code can only be used with an active subscription
             * @example LL-XYA3816
             */
            voucher_code: string;
            /** @description The new claimed reward. The voucher code can also be found in `claimed_reward.redeemable.code` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "active_subscription_discount_voucher";
                    /** @description The discount voucher code */
                    code: string;
                    /**
                     * @description The type of discount this voucher will apply to next order
                     * @enum {string}
                     */
                    discount_type: "fixed" | "percentage";
                    /** @description The discount that will apply to the next order. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                    discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                    /** @description The number of recurring orders this discount will apply to. If `null`, the discount will be applied to any number of orders for as long as it is active */
                    recurring_cycle_limit: number | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RedeemRewardErrorNoSubscriptionIntegrationConfigured: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "no_subscription_integration_configured";
        };
        RewardsRedeemActiveSubscriptionDiscountVoucherRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
        };
        ShippingAddressRecharge: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "recharge";
            /** @description The ID of the address in ReCharge, as returned from the [Addresses API](https://developer.rechargepayments.com/2021-11/addresses/list_addresses) */
            id: number;
        };
        ActiveSubscriptionProductRedeemableSubscriptionDetailsRecharge: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "recharge";
            /** @description The ID of the address in ReCharge that this free product will be sent to */
            address_id: number;
            /** @description The ID of the "onetime" line item created for this free product in ReCharge */
            onetime_id: number;
            /** @description `ISO 8601` timestamp indicating when the next subscription containing this free product is scheduled */
            next_subscription_scheduled_at: string;
        };
        RewardsRedeemActiveSubscriptionProductResponseBody: {
            /** @description The new claimed reward. Details about the product can be found in `claimed_reward.redeemable.product`, and details about the subscription can be found in `claimed_reward.redeemable.subscription_details` */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "active_subscription_product";
                    /** @description The product and variant that will be included in the next subscription */
                    product: {
                        id: string;
                        title: string | null;
                        url: string | null;
                        image_url: string | null;
                        variant: {
                            id: string;
                            title: string | null;
                        };
                    };
                    /** @description The quantity of the product that will be included in the next subscription */
                    quantity: number;
                    subscription_details: components["schemas"]["ActiveSubscriptionProductRedeemableSubscriptionDetailsRecharge"];
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RedeemRewardErrorNoActiveSubscriptions: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "no_active_subscriptions";
        };
        RedeemRewardErrorInvalidVariantId: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "invalid_variant_id";
        };
        RewardsRedeemActiveSubscriptionProductRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
            /** @description The product variant ID to redeem. If the product reward includes multiple variants, you should ask the customer which one they want to redeem */
            variant_id: string;
            shipping_address?: components["schemas"]["ShippingAddressRecharge"];
        };
        RewardsRedeemCustomResponseBody: {
            /** @description Optional fulfillment explanation as a short, plaintext string. If present, this will explain to the customer how and when the reward will be fulfilled */
            fulfillment_explanation: string | null;
            /** @description The new claimed reward */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "custom";
                    /** @description Optional fulfillment explanation as a short, plaintext string. If present, this will explain to the customer how and when the reward will be fulfilled */
                    fulfilment_explanation: string | null;
                    /** @description `ISO 8601` timestamp representing when this custom redeemable was fulfilled, or `null` if it is not yet fulfilled */
                    fulfilled_at: string | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RewardsRedeemCustomRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
            /** @description By default, the reward fulfillment webhook (if configured) will be sent in the background, after the redemption completes. If this field is set to `true`, we will instead call the configured webhook during the redemption and wait for a response. If the webhook times out or returns a non-success response, the redemption will fail. If you set this field to `true`, and the reward has not been configured with a webhook, the redemption will always fail */
            wait_for_webhook_success?: boolean;
        };
        ActiveCartRedemptionCartLineShopify: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "shopify";
            /**
             * @description The merchandise (variant) ID to add to the cart
             * @example gid://shopify/ProductVariant/1001
             */
            merchandise_id: string;
            /**
             * @description The product ID to add to the cart
             * @example gid://shopify/Product/100
             */
            product_id: string;
            /**
             * @description The quantity of the cart line to add
             * @example 1
             */
            quantity: number;
            /**
             * @description An array of key-value attributes that should be included with the cart line
             * @example [
             *       {
             *         "key": "__lion_sfp_id",
             *         "value": "19fdf4cb"
             *       }
             *     ]
             */
            attributes: {
                key: string;
                value: string;
            }[];
        };
        CartRequirementsDetailMinimumCartTotalNoRequirement: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "no_requirement";
        };
        CartRequirementsDetailMinimumCartTotalRequirementMet: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "requirement_met";
        };
        CartRequirementsDetailMinimumCartTotalRequirementNotMet: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "requirement_not_met";
            /** Currency */
            additional_amount_required: components["schemas"]["CurrencyAmount"];
        };
        CartRequirementsDetailMinimumLineItemQuantityNoRequirement: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "no_requirement";
        };
        CartRequirementsDetailMinimumLineItemQuantityRequirementMet: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "requirement_met";
        };
        CartRequirementsDetailMinimumLineItemQuantityRequirementNotMet: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "requirement_not_met";
            /** @description The number of additional line items required before this requirement is met */
            additional_quantity_required: number;
        };
        RewardsRedeemProductCartResponseBody: {
            active_cart_redemption: {
                /** @description The unique ID of this cart redemption. This ID needs to be attached to the cart line when the product is added to the cart. For Shopify, this is used as the value of the `__lion_sfp_id` attribute on the cart line */
                id: string;
                /** @description The ID of the claimed reward that this cart redemption is associated with */
                claimed_reward_id: number;
                /** @description `ISO 8601` timestamp representing when this cart redemption will expire if it has not been checked out, at which point any associated points will be returned to the customer */
                expires_at: string;
                /** @description The product and variant that this cart redemption is for */
                product: {
                    id: string;
                    title: string | null;
                    url: string | null;
                    image_url: string | null;
                    variant: {
                        id: string;
                        title: string | null;
                    };
                };
                /** @description The quantity of the line item in this cart redemption */
                quantity: number;
                /** @description The ID of the cart for which this cart redemption was initially redeemed */
                cart_id: string;
                cart_line: components["schemas"]["ActiveCartRedemptionCartLineShopify"];
                /** @description If this request included a serialized `cart` object whose `id` matches the `cart_id` of this redemption, this object includes information about this redemption's state in the current cart. It will be `null` if the request did not include a serialized cart or its `id` does not match */
                current_cart_state: {
                    /** @description Indicates if the redemption is currently in the cart */
                    in_cart: boolean;
                    /** @description Indicates if all this redemption's requirements are currently met by the cart, such as a required minimum cart total or number of line items */
                    cart_requirements_met: boolean;
                    cart_requirements_detail: {
                        minimum_cart_total: components["schemas"]["CartRequirementsDetailMinimumCartTotalNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementNotMet"];
                        minimum_line_item_quantity: components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementNotMet"];
                    };
                } | null;
            };
            /** @description The new claimed reward */
            claimed_reward: {
                /** @description The ID of the claimed reward resource in LoyaltyLion */
                id: number;
                /** @description `ISO 8601` timestamp indicating when this reward was claimed */
                claimed_at: string;
                /** @description The ID of the reward that was claimed. If a reward with this ID does not exist in the current [Site Configuration](/headless-api/2025-06/configuration/get-configuration), it means the reward has been deleted. The associated redeemable, if any, will usually still be active even after the reward has been deleted */
                reward_id: number;
                /**
                 * @description Short, localized title for this claimed reward. For example, '$5 voucher', or 'Free Water Bottle'. This is usually the same title as the associated reward
                 * @example $5 voucher
                 */
                title: string;
                /**
                 * @description The state of this claimed reward. Only `active` rewards will have a usable `redeemable`
                 * @enum {string}
                 */
                state: "approved" | "declined" | "expired" | "pending" | "void";
                /** @description Details about how the customer received this reward. One of `points_redemption` (the customer used their points to redeem the reward), `rule_completion` (the reward was awarded as the result of completing a rule), or `tier_entry` (the reward was awarded when the customer entered a tier) */
                source: components["schemas"]["ClaimedRewardSourcePointsRedemption"] | components["schemas"]["ClaimedRewardSourceRuleCompletion"] | components["schemas"]["ClaimedRewardSourceTierEntry"];
                /** @description `ISO 8601` timestamp indicating when this reward and its associated redeemable will be automatically voided and refunded if it has not yet been used, or `null` if not applicable */
                auto_refund_at: string | null;
                redeemable: {
                    /**
                     * @description The usage status of this redeemable. Redeemables that are `used` cannot be used again, e.g. a voucher code that has already been used with an order
                     * @enum {string}
                     */
                    usage_status: "not_used" | "partially_used" | "used";
                    /** @enum {string} */
                    kind: "product_cart";
                    /** @description The product and variant that should be added to the cart */
                    product: {
                        id: string;
                        title: string | null;
                        url: string | null;
                        image_url: string | null;
                        variant: {
                            id: string;
                            title: string | null;
                        };
                    };
                    /** @description The quantity of the product that should be added to the cart */
                    quantity: number;
                    /** @description `ISO 8601` timestamp representing when the product was used in an order, or `null` if not yet used */
                    used_at: string | null;
                    /** @description The unique cart line identifier, which connects this redemption to the line item in the eventual completed order. For Shopify, this identifier is used as the value of the `__lion_sfp_id` attribute on the cart line when the product is added to the cart */
                    cart_line_identifier: string;
                    /** @description The active cart redemption associated with this product reward, if any. A product reward will have an active cart redemption if it has been redeemed and has not yet been checked out with an order, or expired */
                    active_cart_redemption: {
                        /** @description The unique ID of this cart redemption. This ID needs to be attached to the cart line when the product is added to the cart. For Shopify, this is used as the value of the `__lion_sfp_id` attribute on the cart line */
                        id: string;
                        /** @description The ID of the claimed reward that this cart redemption is associated with */
                        claimed_reward_id: number;
                        /** @description `ISO 8601` timestamp representing when this cart redemption will expire if it has not been checked out, at which point any associated points will be returned to the customer */
                        expires_at: string;
                        /** @description The product and variant that this cart redemption is for */
                        product: {
                            id: string;
                            title: string | null;
                            url: string | null;
                            image_url: string | null;
                            variant: {
                                id: string;
                                title: string | null;
                            };
                        };
                        /** @description The quantity of the line item in this cart redemption */
                        quantity: number;
                        /** @description The ID of the cart for which this cart redemption was initially redeemed */
                        cart_id: string;
                        cart_line: components["schemas"]["ActiveCartRedemptionCartLineShopify"];
                        /** @description If this request included a serialized `cart` object whose `id` matches the `cart_id` of this redemption, this object includes information about this redemption's state in the current cart. It will be `null` if the request did not include a serialized cart or its `id` does not match */
                        current_cart_state: {
                            /** @description Indicates if the redemption is currently in the cart */
                            in_cart: boolean;
                            /** @description Indicates if all this redemption's requirements are currently met by the cart, such as a required minimum cart total or number of line items */
                            cart_requirements_met: boolean;
                            cart_requirements_detail: {
                                minimum_cart_total: components["schemas"]["CartRequirementsDetailMinimumCartTotalNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementNotMet"];
                                minimum_line_item_quantity: components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementNotMet"];
                            };
                        } | null;
                    } | null;
                };
            };
            /** @description The customer object, updated as of the reward redemption, i.e. their `claimed_rewards` will include the new redemption. This customer will always have `state` set to `enrolled`, as only enrolled customers can redeem rewards */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RedeemRewardErrorMaxCartRedemptionsReached: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            code: "max_cart_redemptions_reached";
            limit: number;
            message?: string;
        };
        RewardsRedeemProductCartRequestBody: {
            /** @description The LoyaltyLion ID of the reward to redeem */
            reward_id: number;
            /** @description The ID of the customer (in your ecommerce store or platform) to redeem the reward for. For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
            customer_merchant_id: string;
            /** @description The product variant ID to redeem. If the product reward includes multiple variants, you should ask the customer which one they want to redeem */
            variant_id: string;
            /** @description The ID of the current cart. The resulting cart redemption will be linked to this cart */
            cart_id: string;
        };
        RewardsCancelProductCartResponseBody: {
            /** @description The customer object, updated as of the reward cancellation */
            customer: components["schemas"]["CustomerEnrolled"];
        };
        RewardsCancelProductCartRequestBody: {
            /** @description The LoyaltyLion ID of the claimed reward to cancel */
            claimed_reward_id: number;
        };
        PointsTier: {
            id: number;
            /**
             * @description The name of the tier
             * @example Gold
             */
            name: string;
            /** @description The position of the tier, where `1` is the first and default tier */
            position: number;
            /** @description If true, this is a hidden tier and is only shown to shoppers who are in it */
            hidden: boolean;
            /** @description Ordered list of tier benefit IDs that are associated with this tier */
            benefit_ids: number[];
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "points";
            /**
             * @description The lower bound of the tier in points
             * @example 0
             */
            lower_bound: number;
            /**
             * @description The upper bound of the tier in points, or `null` if there is no upper bound
             * @example 99
             */
            upper_bound: number | null;
        };
        SpendTier: {
            id: number;
            /**
             * @description The name of the tier
             * @example Gold
             */
            name: string;
            /** @description The position of the tier, where `1` is the first and default tier */
            position: number;
            /** @description If true, this is a hidden tier and is only shown to shoppers who are in it */
            hidden: boolean;
            /** @description Ordered list of tier benefit IDs that are associated with this tier */
            benefit_ids: number[];
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "spend";
            /**
             * Currency
             * @description The lower bound of the tier as a currency amount. For example, $10.50 would be "10.50", ¥100 would be "100"
             */
            lower_bound: components["schemas"]["CurrencyAmount"];
            /**
             * Currency
             * @description The upper bound of the tier as a currency amount, or `null` if there is no upper bound. For example, $150.50 USD would be "150.50", ¥500 would be "500"
             */
            upper_bound: components["schemas"]["CurrencyAmount"] | null;
        };
        ConditionalTier: {
            id: number;
            /**
             * @description The name of the tier
             * @example Gold
             */
            name: string;
            /** @description The position of the tier, where `1` is the first and default tier */
            position: number;
            /** @description If true, this is a hidden tier and is only shown to shoppers who are in it */
            hidden: boolean;
            /** @description Ordered list of tier benefit IDs that are associated with this tier */
            benefit_ids: number[];
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "conditional";
        };
        TierMembershipRolling: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            mode: "rolling";
            /**
             * @description The number of months after which a membership in this tier will expire
             * @example 12
             */
            duration_months: number;
        };
        TierMembershipCalendar: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            mode: "calendar";
            /**
             * @description The month and day memberships in this tier will expire
             * @example {
             *       "month": 12,
             *       "day": 31
             *     }
             */
            expires_at: {
                month: number;
                day: number;
            };
        };
        TierMembershipLifetime: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            mode: "lifetime";
        };
        RefereeIncentiveCartDiscount: {
            /**
             * Currency
             * @description The minimum spend, if any, for the incentive to apply
             */
            minimum_spend: components["schemas"]["CurrencyAmount"] | null;
            /**
             * @description Short localized text explaining the incentive
             * @example Get a 10% discount on your order with this code when you spend over $50
             */
            incentive_text: string;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "cart_discount_voucher";
            /**
             * @description The type of discount this voucher will apply to the cart
             * @example percentage
             * @enum {string}
             */
            discount_kind: "fixed" | "percentage";
            /**
             * @description The discount that will apply to the cart. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a percentage from `1-100`
             * @example {
             *       "percentage": 10,
             *       "formatted": "10%"
             *     }
             */
            discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
        };
        RefereeIncentiveFreeShipping: {
            /**
             * Currency
             * @description The minimum spend, if any, for the incentive to apply
             */
            minimum_spend: components["schemas"]["CurrencyAmount"] | null;
            /**
             * @description Short localized text explaining the incentive
             * @example Get a 10% discount on your order with this code when you spend over $50
             */
            incentive_text: string;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "free_shipping_voucher";
        };
        RuleBirthday: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "birthday";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleCollectionPurchase: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "collection_purchase";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleNewsletterSignup: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "newsletter_signup";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RulePageview: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "pageview";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleProductPurchase: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "product_purchase";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RulePurchase: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "purchase";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleJoinProgram: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "join_program";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleReview: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "review";
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleCustom: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "custom";
            properties: {
                /** @description The name of this custom rule, as set by the merchant */
                name: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleFacebookLike: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "facebook_like";
            properties: {
                facebook_like_url: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleTwitterFollow: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "twitter_follow";
            properties: {
                twitter_handle: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleInstagramFollow: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "instagram_follow";
            properties: {
                instagram_handle: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleInstagramMention: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "instagram_mention";
            properties: {
                instagram_handle: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleInstagramPostHashtag: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "instagram_post_hashtag";
            properties: {
                instagram_handle: string;
                hashtag: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleTiktokFollow: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "tiktok_follow";
            properties: {
                tiktok_handle: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleTiktokPostHashtag: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "tiktok_post_hashtag";
            properties: {
                hashtag: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleReferral: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "referral";
            properties: {
                /** @enum {string} */
                trigger: "any_purchase" | "qualifying_purchase";
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RuleClickthrough: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "clickthrough";
            properties: {
                destination_url: string;
            };
            /** @description A list of variants for this rule. Some aspects of a rule, such as its outcome and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            }[];
        };
        RewardGiftCard: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "gift_card";
            properties: {
                /**
                 * Currency
                 * @description The initial balance of the gift card
                 */
                initial_balance: components["schemas"]["CurrencyAmount"];
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardCartDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "cart_discount_voucher";
            properties: {
                /**
                 * @description The type of discount this voucher will apply to the cart
                 * @enum {string}
                 */
                discount_type: "fixed" | "percentage";
                /** @description The discount that will apply to the cart. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                /**
                 * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                 * @example one_time
                 * @enum {string}
                 */
                applies_to_order_type: "all" | "one_time" | "subscription";
                /**
                 * @description The number of orders this discount will apply to, for discounts that can apply to subscription orders. If it's `1`, it means the discount will apply only to the first order with which it is used. If `null`, the discount will be applied to any number of orders for as long as it is active
                 * @example 1
                 */
                recurring_cycle_limit: number | null;
                /**
                 * Currency
                 * @description The minimum spend, if any, for the voucher to apply to the cart
                 */
                minimum_spend: components["schemas"]["CurrencyAmount"] | null;
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardCartVariableDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "cart_variable_discount_voucher";
            properties: {
                /**
                 * Currency
                 * @description The minimum discount that can be selected, e.g. 1 for a minimum of $1
                 */
                minimum_discount: components["schemas"]["CurrencyAmount"];
                /**
                 * Currency
                 * @description The maximum discount that can be selected, e.g. 5 for a maximum of $5
                 */
                maximum_discount: components["schemas"]["CurrencyAmount"];
                /**
                 * Currency
                 * @description The required minimum spend in cart before the reward can be redeemed
                 */
                minimum_spend_before_discount: components["schemas"]["CurrencyAmount"] | null;
                /**
                 * Currency
                 * @description Only allow redemption of a discount value that would leave the cart total above this amount
                 */
                minimum_spend_after_discount: components["schemas"]["CurrencyAmount"] | null;
                /**
                 * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                 * @example one_time
                 * @enum {string}
                 */
                applies_to_order_type: "all" | "one_time" | "subscription";
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardFreeShippingVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "free_shipping_voucher";
            properties: {
                /**
                 * Currency
                 * @description Free shipping will only be applied if the shipping rate is equal to or less than this amount, or `null` if there is no maximum
                 */
                max_shipping: components["schemas"]["CurrencyAmount"] | null;
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardProductDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "product_discount_voucher";
            properties: {
                /** @description The product that this discount applies to */
                product: {
                    id: string;
                    image_url: string | null;
                    /** @description The variant ID to apply the discount to. If `null`, the discount can be applied to all this product's variants */
                    variant_id: string | null;
                };
                /**
                 * Percentage
                 * @description The discount that will apply to the product. Product discounts are always percentage based, so this will be a number from `1-100`
                 */
                discount: components["schemas"]["PercentageAmount"];
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardCollectionDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "collection_discount_voucher";
            properties: {
                /** @description The collection that this discount applies to */
                collection: {
                    id: string;
                    title: string | null;
                    url: string | null;
                };
                /**
                 * @description The type of discount this voucher will apply to items in the collection
                 * @enum {string}
                 */
                discount_type: "fixed" | "percentage";
                /** @description The discount that will apply to items in the collection. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                /**
                 * Currency
                 * @description The minimum spend, if any, for the voucher to apply to the cart
                 */
                minimum_spend: components["schemas"]["CurrencyAmount"] | null;
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardProductCart: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "product_cart";
            properties: {
                /** @description The product that can be added to the cart. If the product has more than one variant, the shopper should be able to choose which one to redeem */
                product: {
                    id: string;
                    title: string | null;
                    url: string | null;
                    image_url: string | null;
                    variants: {
                        id: string;
                        title: string | null;
                        sort_key: number;
                    }[];
                };
                /** @description The maximum number of times this product can be redeemed per cart, or `null` if there is no limit */
                max_redemptions_per_cart: number | null;
                /** @description Cart requirements that must be met before the reward can be redeemed */
                cart_requirements: {
                    /**
                     * Currency
                     * @description The cart total must be equal to or greater than this amount, or `null` if there is no minimum total
                     */
                    minimum_cart_total: components["schemas"]["CurrencyAmount"] | null;
                    /** @description The cart must contain at least this number of line items, or `null` if there is no required line item count */
                    minimum_line_item_count: number | null;
                };
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardActiveSubscriptionDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "active_subscription_discount_voucher";
            properties: {
                /**
                 * @description The type of discount this voucher will apply to next order
                 * @enum {string}
                 */
                discount_type: "fixed" | "percentage";
                /** @description The discount that will apply to the next order. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                /** @description The number of recurring orders this discount will apply to. If `null`, the discount will be applied to any number of orders for as long as it is active */
                recurring_cycle_limit: number | null;
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardActiveSubscriptionProduct: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "active_subscription_product";
            properties: {
                /** @description The product that can be added to an active subscription. If the product has more than one variant, the shopper should be able to choose which one to redeem */
                product: {
                    id: string;
                    title: string | null;
                    url: string | null;
                    image_url: string | null;
                    variants: {
                        id: string;
                        title: string | null;
                        sort_key: number;
                    }[];
                };
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        RewardCustom: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "custom";
            properties: {
                /** @enum {string} */
                fulfillment_method: "manual" | "webhook";
                /** @description The URL to which we'll send a webhook for reward fulfillment, if one is configured */
                fulfillment_webhook_url: string | null;
            };
            /** @description A list of variants for this reward. Some aspects of a reward, such as its cost and whether it's enabled, can vary based on tier */
            variants: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            }[];
        };
        TierProgressPoints: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "points";
            /** @description `ISO 8601` timestamp representing the date at which the calculated progress is no longer accurate. Tier evaluation uses a sliding evaluation window, so as time passes, contributing points or spend will no longer be counted if they are outside of the evaluation window. This will be `null` for lifetime tiers */
            valid_until: string | null;
            /** @description The number of additional points required to renew the current tier when the current membership expires. This will be `null` if the membership does not expire (e.g. a lifetime tier), or if the current membership is already for the bottom (default) tier */
            points_needed_for_renewal: number | null;
            /** @description The ID of the next tier that this customer could upgrade to from their current tier. Will be `null` if the customer's current tier is already the highest tier in the program, a conditional tier, or a hidden tier */
            upgrade_tier_id: number | null;
            /** @description The number of additional points required to move into the next tier. Will be `null` if there is no eligible next tier (see `upgrade_tier_id`) */
            points_needed_for_upgrade: number | null;
            tier_points: {
                /** @description The number of points contributing to tier progress as of right now. This is equivalent to the number of eligible points from now, back to the start of the evaluation window. */
                now: number;
                /** @description The predicted number of points contributing to tier progress as of the current tier's expiration date. This is similar to the `now` value, but instead of the window ending at `now`, it ends at the current tier expiration date. This can be used to determine if a customer would be able to renew their current tier when it expires This will be `null` if the membership never expires (e.g. lifetime tiers) */
                at_expiration: number | null;
            };
        };
        TierProgressSpend: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "spend";
            /** @description `ISO 8601` timestamp representing the date at which the calculated progress is no longer accurate. Tier evaluation uses a sliding evaluation window, so as time passes, contributing points or spend will no longer be counted if they are outside of the evaluation window. This will be `null` for lifetime tiers */
            valid_until: string | null;
            /**
             * Currency
             * @description The amount of additional spend required to renew the current tier when the current membership expires. Will be `null` if the membership does not expire (e.g. a lifetime tier), or if the current membership is already for the bottom (default) tier
             */
            spend_needed_for_renewal: components["schemas"]["CurrencyAmount"] | null;
            /** @description The ID of the next tier that this customer could upgrade to from their current tier. Will be `null` if the customer's current tier is already the highest tier in the program, a conditional tier, or a hidden tier */
            upgrade_tier_id: number | null;
            /**
             * Currency
             * @description The amount of additional spend required to move into the next tier. Will be `null` if there is no eligible next tier (see `upgrade_tier_id`)
             */
            spend_needed_for_upgrade: components["schemas"]["CurrencyAmount"] | null;
            tier_spend: {
                /**
                 * Currency
                 * @description The amount of spend contributing to tier progress as of right now. This is equivalent to the amount of eligible spend from now, back to the start of the evaluation window.
                 */
                now: components["schemas"]["CurrencyAmount"];
                /**
                 * Currency
                 * @description The predicted amount of spend contributing to tier progress as of the current tier's expiration date. This is similar to the `now` value, but instead of the window ending at `now`, it ends at the current tier expiration date. This can be used to determine if a customer would be able to renew their current tier when it expires This will be `null` if the membership never expires (e.g. lifetime tiers)
                 */
                at_expiration: components["schemas"]["CurrencyAmount"] | null;
            };
        };
        CustomerAvailableRewardGiftCard: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "gift_card";
            properties: {
                /**
                 * Currency
                 * @description The initial balance of the gift card
                 */
                initial_balance: components["schemas"]["CurrencyAmount"];
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardCartDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "cart_discount_voucher";
            properties: {
                /**
                 * @description The type of discount this voucher will apply to the cart
                 * @enum {string}
                 */
                discount_type: "fixed" | "percentage";
                /** @description The discount that will apply to the cart. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                /**
                 * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                 * @example one_time
                 * @enum {string}
                 */
                applies_to_order_type: "all" | "one_time" | "subscription";
                /**
                 * @description The number of orders this discount will apply to, for discounts that can apply to subscription orders. If it's `1`, it means the discount will apply only to the first order with which it is used. If `null`, the discount will be applied to any number of orders for as long as it is active
                 * @example 1
                 */
                recurring_cycle_limit: number | null;
                /**
                 * Currency
                 * @description The minimum spend, if any, for the voucher to apply to the cart
                 */
                minimum_spend: components["schemas"]["CurrencyAmount"] | null;
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardCartVariableDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "cart_variable_discount_voucher";
            properties: {
                /**
                 * Currency
                 * @description The minimum discount that can be selected, e.g. 1 for a minimum of $1
                 */
                minimum_discount: components["schemas"]["CurrencyAmount"];
                /**
                 * Currency
                 * @description The maximum discount that can be selected, e.g. 5 for a maximum of $5
                 */
                maximum_discount: components["schemas"]["CurrencyAmount"];
                /**
                 * Currency
                 * @description The required minimum spend in cart before the reward can be redeemed
                 */
                minimum_spend_before_discount: components["schemas"]["CurrencyAmount"] | null;
                /**
                 * Currency
                 * @description Only allow redemption of a discount value that would leave the cart total above this amount
                 */
                minimum_spend_after_discount: components["schemas"]["CurrencyAmount"] | null;
                /**
                 * @description The type of order that this voucher will apply to. One of: `all` (applies to all types of order), `one_time` (applies to one-time orders), `subscription` (applies to subscription orders)
                 * @example one_time
                 * @enum {string}
                 */
                applies_to_order_type: "all" | "one_time" | "subscription";
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardFreeShippingVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "free_shipping_voucher";
            properties: {
                /**
                 * Currency
                 * @description Free shipping will only be applied if the shipping rate is equal to or less than this amount, or `null` if there is no maximum
                 */
                max_shipping: components["schemas"]["CurrencyAmount"] | null;
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardProductDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "product_discount_voucher";
            properties: {
                /** @description The product that this discount applies to */
                product: {
                    id: string;
                    image_url: string | null;
                    /** @description The variant ID to apply the discount to. If `null`, the discount can be applied to all this product's variants */
                    variant_id: string | null;
                };
                /**
                 * Percentage
                 * @description The discount that will apply to the product. Product discounts are always percentage based, so this will be a number from `1-100`
                 */
                discount: components["schemas"]["PercentageAmount"];
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardCollectionDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "collection_discount_voucher";
            properties: {
                /** @description The collection that this discount applies to */
                collection: {
                    id: string;
                    title: string | null;
                    url: string | null;
                };
                /**
                 * @description The type of discount this voucher will apply to items in the collection
                 * @enum {string}
                 */
                discount_type: "fixed" | "percentage";
                /** @description The discount that will apply to items in the collection. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                /**
                 * Currency
                 * @description The minimum spend, if any, for the voucher to apply to the cart
                 */
                minimum_spend: components["schemas"]["CurrencyAmount"] | null;
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardProductCart: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "product_cart";
            properties: {
                /** @description The product that can be added to the cart. If the product has more than one variant, the shopper should be able to choose which one to redeem */
                product: {
                    id: string;
                    title: string | null;
                    url: string | null;
                    image_url: string | null;
                    variants: {
                        id: string;
                        title: string | null;
                        sort_key: number;
                    }[];
                };
                /** @description The maximum number of times this product can be redeemed per cart, or `null` if there is no limit */
                max_redemptions_per_cart: number | null;
                /** @description Cart requirements that must be met before the reward can be redeemed */
                cart_requirements: {
                    /**
                     * Currency
                     * @description The cart total must be equal to or greater than this amount, or `null` if there is no minimum total
                     */
                    minimum_cart_total: components["schemas"]["CurrencyAmount"] | null;
                    /** @description The cart must contain at least this number of line items, or `null` if there is no required line item count */
                    minimum_line_item_count: number | null;
                };
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardActiveSubscriptionDiscountVoucher: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "active_subscription_discount_voucher";
            properties: {
                /**
                 * @description The type of discount this voucher will apply to next order
                 * @enum {string}
                 */
                discount_type: "fixed" | "percentage";
                /** @description The discount that will apply to the next order. For `fixed` discounts this will be the currency amount. For `percentage` discounts, it will be a number from `1-100` */
                discount: components["schemas"]["CurrencyAmount"] | components["schemas"]["PercentageAmount"];
                /** @description The number of recurring orders this discount will apply to. If `null`, the discount will be applied to any number of orders for as long as it is active */
                recurring_cycle_limit: number | null;
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardActiveSubscriptionProduct: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "active_subscription_product";
            properties: {
                /** @description The product that can be added to an active subscription. If the product has more than one variant, the shopper should be able to choose which one to redeem */
                product: {
                    id: string;
                    title: string | null;
                    url: string | null;
                    image_url: string | null;
                    variants: {
                        id: string;
                        title: string | null;
                        sort_key: number;
                    }[];
                };
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRewardCustom: {
            id: number;
            /** @description A limit for this reward, which is applied per customer. Rewards with a limit set may only be claimed a set number of times in a given interval. The limit may be `null` if the reward has no limit and can therefore be claimed any number of times by the same customer */
            limit: {
                /** @description The number of times this reward can be claimed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "custom";
            properties: {
                /** @enum {string} */
                fulfillment_method: "manual" | "webhook";
                /** @description The URL to which we'll send a webhook for reward fulfillment, if one is configured */
                fulfillment_webhook_url: string | null;
            };
            /** @description The reward variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this reward variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this reward. For example, '$5 voucher', 'Free Water Bottle', or '$5 off next 3 subscription orders'
                 * @example $5 voucher
                 */
                title: string;
                /** @description Indicates if this reward variant is enabled. For example, some rewards are only available for certain tiers */
                enabled: boolean;
                /** @description The cost of this reward in points. Will be one of `fixed` (costs a fixed number of points) or `variable` (cost is multiplied by unit, e.g. 100 points per $1 discount) */
                cost: {
                    /** @enum {string} */
                    kind: "fixed";
                    points: number;
                } | {
                    /** @enum {string} */
                    kind: "variable";
                    /** @enum {string} */
                    unit: "discount_amount";
                    points_per_unit: number;
                };
                /**
                 * @description Short, localized text indicating the cost of this reward. For example, '100 points' or '10 points per $1'
                 * @example 100 points
                 */
                cost_text: string;
            };
            /** @description Information about this customer's interaction with this reward, such as the number of times they have claimed it, or any limit that is in effect, and if they are currently able to redeem it */
            context: {
                /** @description An object that indicates if this reward can be redeemed by this customer. The `state` property indicates if it can be redeemed. If `state == "redeemable"`, the reward can be redeemed by the customer */
                can_redeem: components["schemas"]["RewardContextCanRedeemRedeemable"] | components["schemas"]["RewardContextCanRedeemInsufficientPoints"] | components["schemas"]["RewardContextCanRedeemClaimLimitReached"] | components["schemas"]["RewardContextCanRedeemCartRequirementsNotMet"] | components["schemas"]["RewardContextCanRedeemMaxRedemptionsForCartReached"] | components["schemas"]["RewardContextCanRedeemUnknown"];
                /** @description `ISO 8601` timestamp representing when this reward was last claimed by the customer, or `null` if the reward has never been claimed by the customer */
                last_claimed_at: string | null;
                /** @description The number of times this reward has been claimed by the customer */
                claim_count: number;
                /** @description An object indicating the state of this reward's claim limit specific to this customer. When rewards are limited, they can only be claimed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                claim_limit: components["schemas"]["RewardContextClaimLimitNoLimit"] | components["schemas"]["RewardContextClaimLimitLimitNotReached"] | components["schemas"]["RewardContextClaimLimitLimitReachedForever"] | components["schemas"]["RewardContextClaimLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleBirthday: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "birthday";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleCollectionPurchase: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "collection_purchase";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleNewsletterSignup: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "newsletter_signup";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRulePageview: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "pageview";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleProductPurchase: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "product_purchase";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRulePurchase: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "purchase";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleJoinProgram: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "join_program";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleReview: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "review";
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleCustom: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "custom";
            properties: {
                /** @description The name of this custom rule, as set by the merchant */
                name: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleFacebookLike: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "facebook_like";
            properties: {
                facebook_like_url: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleTwitterFollow: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "twitter_follow";
            properties: {
                twitter_handle: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleInstagramFollow: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "instagram_follow";
            properties: {
                instagram_handle: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleInstagramMention: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "instagram_mention";
            properties: {
                instagram_handle: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleInstagramPostHashtag: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "instagram_post_hashtag";
            properties: {
                instagram_handle: string;
                hashtag: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleTiktokFollow: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "tiktok_follow";
            properties: {
                tiktok_handle: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleTiktokPostHashtag: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "tiktok_post_hashtag";
            properties: {
                hashtag: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleReferral: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "referral";
            properties: {
                /** @enum {string} */
                trigger: "any_purchase" | "qualifying_purchase";
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        CustomerAvailableRuleClickthrough: {
            id: number;
            /** @description A limit for this rule, which is applied per customer. Rules with a limit set may only be completed a set number of times in a given interval. The limit may be `null` if the rule has no limit and can therefore be completed any number of times by the same customer */
            limit: {
                /** @description The number of times this rule can be completed for a customer in the specified calendar `interval`, e.g. once a week */
                count: number;
                /**
                 * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
                 * @enum {string|null}
                 */
                interval: "day" | "week" | "month" | "year" | null;
            } | null;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "clickthrough";
            properties: {
                destination_url: string;
            };
            /** @description The rule variant that is applicable to this customer and their tier */
            variant: {
                /** @description The tier ID to which this rule variant applies. This will always be `null` if the program does not have tiers enabled */
                tier_id: number | null;
                /**
                 * @description Short, localized title for this rule. For example, 'Make a purchase' or 'Refer a friend'
                 * @example Make a purchase
                 */
                title: string;
                /** @description Indicates if this rule variant is enabled. For example, some rules are only available for certain tiers */
                enabled: boolean;
                /** @description The result of completing this rule. Will be one of `points` (points are awarded to the customer), or `reward` (a reward is immediately granted, such as a cart discount voucher) */
                result: components["schemas"]["RuleResultPoints"] | components["schemas"]["RuleResultReward"];
                /**
                 * @description Short, localized text indicating the result of completing this rule variant. For example: '100 points', '5 points per $1', or '$5 voucher'
                 * @example 5 points per $1
                 */
                result_short_text: string;
            };
            /** @description Information about this customer's interaction with this rule, such as the number of times they have completed it, or any limit that is in effect */
            context: {
                /** @description `ISO 8601` timestamp representing when this rule was last completed by the customer, or `null` if the rule has never been completed by the customer */
                last_completed_at: string | null;
                /** @description The number of times this rule has been completed by the customer in total */
                completion_count: number;
                /** @description An object indicating the state of this rule's completion limit specific to this customer. When rules are limited, they can only be completed by a customer a set number of times in a given interval (or forever). The `state` property indicates what limit, if any, is currently in effect */
                completion_limit: components["schemas"]["RuleContextCompletionLimitNoLimit"] | components["schemas"]["RuleContextCompletionLimitLimitNotReached"] | components["schemas"]["RuleContextCompletionLimitLimitReachedForever"] | components["schemas"]["RuleContextCompletionLimitLimitReachedUntilReset"];
            };
        };
        RecommendedCartActionShopifyCartLine: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "shopify";
            /**
             * @description The ID of the cart line to be removed
             * @example gid://shopify/CartLine/735a73a2-666f-4df2-91dc-540bc1b8b9ba
             */
            id: string;
            /**
             * @description The merchandise (variant) ID to be removed from the cart
             * @example gid://shopify/ProductVariant/1001
             */
            merchandise_id: string;
            /** @description The attributes associated with the cart line as an array of key-value pairs */
            attributes: {
                key: string;
                value: string | null;
            }[];
        };
        RuleResultPoints: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "points";
            /**
             * @description Indicates if the points value is per currency unit. For example, if a rule provides 5 points for every $1 spent, this will be `1`. If `null`, the points value is exact
             * @example 1
             */
            per_currency_unit: number | null;
            /**
             * @description The number of points provided when this rule variant is completed. If `per_currency_unit` is not null, this will be the number of points per currency unit (e.g. 5 points per $1)
             * @example 5
             */
            points: number;
        };
        RuleResultReward: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            kind: "reward";
            reward: {
                kind: unknown | unknown | "gift_card" | "cart_discount_voucher" | "cart_variable_discount_voucher" | "free_shipping_voucher" | "product_discount_voucher" | "collection_discount_voucher" | "product_cart" | "active_subscription_discount_voucher" | "active_subscription_product" | "custom";
                title: string;
            };
        };
        RewardContextCanRedeemRedeemable: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "redeemable";
        };
        RewardContextCanRedeemInsufficientPoints: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "insufficient_points";
            /** @description The number of additional points required before this customer can afford the reward */
            additional_points_required: number;
        };
        RewardContextCanRedeemClaimLimitReached: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "claim_limit_reached";
        };
        RewardContextCanRedeemCartRequirementsNotMet: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "cart_requirements_not_met";
            cart_requirements_detail: {
                minimum_cart_total: components["schemas"]["CartRequirementsDetailMinimumCartTotalNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumCartTotalRequirementNotMet"];
                minimum_line_item_quantity: components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityNoRequirement"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementMet"] | components["schemas"]["CartRequirementsDetailMinimumLineItemQuantityRequirementNotMet"];
            };
        };
        RewardContextCanRedeemMaxRedemptionsForCartReached: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "max_redemptions_for_cart_reached";
        };
        RewardContextCanRedeemUnknown: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "unknown";
        };
        RewardContextClaimLimitNoLimit: {
            /**
             * @description The associated reward has no limit, so this customer can claim it any number of times (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "no_limit";
        };
        RewardContextClaimLimitLimitNotReached: {
            /**
             * @description The associated reward has a claim limit, but this customer has not yet reached it (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "limit_not_reached";
            /**
             * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the reward can only ever be claimed for a customer a set number of times
             * @enum {string|null}
             */
            interval: "day" | "week" | "month" | "year" | null;
            /** @description The number of times this reward can be claimed by the customer in the current limit interval */
            allowed_claims_within_interval: number;
            /** @description The number of times this reward has been claimed by the customer in the current limit interval */
            claim_count_within_interval: number;
            /** @description The number of times this reward can still be claimed by the customer in the current limit interval */
            remaining_claims_within_interval: number;
        };
        RewardContextClaimLimitLimitReachedForever: {
            /**
             * @description The associated reward has a limit, the customer has reached it, and the limit will never reset. This means the reward can never be claimed again by this customer (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "limit_reached_forever";
        };
        RewardContextClaimLimitLimitReachedUntilReset: {
            /**
             * @description The associated reward has a limit and the customer has reached it. The customer will be able to claim the reward again once the limit resets, which will be at the specified `reset_at` date (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "limit_reached_until_reset";
            /**
             * @description The calendar interval for this limit
             * @enum {string}
             */
            interval: "day" | "week" | "month" | "year";
            /** @description `ISO 8601` timestamp representing when the limit will reset and the customer can claim the reward again. This will usually be the start of the next calendar interval */
            resets_at: string;
            /**
             * @description Localized text indicating when the limit will reset relative to now
             * @example 3 days
             */
            resets_at_relative_to_now: string;
        };
        RuleContextCompletionLimitNoLimit: {
            /**
             * @description The associated rule has no limit, so this customer can complete it any number of times (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "no_limit";
        };
        RuleContextCompletionLimitLimitNotReached: {
            /**
             * @description The associated rule has a limit, but this customer has not yet reached it (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "limit_not_reached";
            /**
             * @description The calendar interval for this limit. If `null`, it means the limit will never reset and the rule can only ever be completed for a customer a set number of times
             * @enum {string|null}
             */
            interval: "day" | "week" | "month" | "year" | null;
            /** @description The number of times this rule can be completed by the customer in the current limit interval */
            allowed_completions_within_interval: number;
            /** @description The number of times this rule has been completed by the customer in the current limit interval */
            completion_count_within_interval: number;
            /** @description The number of times this rule can still be completed by the customer in the current limit interval */
            remaining_completions_within_interval: number;
        };
        RuleContextCompletionLimitLimitReachedForever: {
            /**
             * @description The associated rule has a limit, the customer has reached it, and the limit will never reset. This means the rule can never be completed again by this customer (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "limit_reached_forever";
        };
        RuleContextCompletionLimitLimitReachedUntilReset: {
            /**
             * @description The associated rule has a limit and the customer has reached it. The customer will be able to complete the rule again once the limit resets, which will be at the specified `reset_at` date (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            state: "limit_reached_until_reset";
            /**
             * @description The calendar interval for this limit
             * @enum {string}
             */
            interval: "day" | "week" | "month" | "year";
            /** @description `ISO 8601` timestamp representing when the limit will reset and the customer can complete the rule again. This will usually be the start of the next calendar interval */
            resets_at: string;
            /**
             * @description Localized text indicating when the limit will reset relative to now
             * @example 3 days
             */
            resets_at_relative_to_now: string;
        };
    };
    responses: {
        /** @description Bad Request */
        ClientErrorBadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error: {
                        message: string;
                        details?: {
                            [key: string]: string;
                        };
                    };
                };
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "configuration.getConfiguration": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SiteConfiguration"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 404 */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                        };
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                        };
                    };
                };
            };
        };
    };
    "customers.getCustomer": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
                /** @description The ID of the customer in your platform or ecommerce store.
                 *
                 *     For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
                merchant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomersGetCustomerResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "customers.initializeSession": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID. If a new customer is created from this API call, they'll be created in this Site, which is relevant for multi-site programs */
                site_id: number;
                /** @description The ID of the customer in your platform or ecommerce store.
                 *
                 *     For Shopify stores, you can pass either a [GID](https://shopify.dev/docs/api/usage/gids) or a regular numeric ID. If you do pass a GID you must encode it as a URL parameter, e.g. `gid%3A%2F%2Fshopify%2FCustomer%2F1001` */
                merchant_id: string;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CustomersInitializeSessionRequestBody"];
            };
        };
        responses: {
            /** @description 200 */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomersInitializeSessionResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["InitializeSessionErrorEmailAlreadyInUse"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemCartDiscountVoucher": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemCartDiscountVoucherRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemCartDiscountVoucherResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemFreeShippingVoucher": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemFreeShippingVoucherRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemFreeShippingVoucherResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemCollectionDiscountVoucher": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemCollectionDiscountVoucherRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemCollectionDiscountVoucherResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemProductDiscountVoucher": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemProductDiscountVoucherRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemProductDiscountVoucherResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemGiftCard": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemGiftCardRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemGiftCardResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemActiveSubscriptionDiscountVoucher": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemActiveSubscriptionDiscountVoucherRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemActiveSubscriptionDiscountVoucherResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"] | components["schemas"]["RedeemRewardErrorNoSubscriptionIntegrationConfigured"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemActiveSubscriptionProduct": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemActiveSubscriptionProductRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemActiveSubscriptionProductResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"] | components["schemas"]["RedeemRewardErrorNoSubscriptionIntegrationConfigured"] | components["schemas"]["RedeemRewardErrorNoActiveSubscriptions"] | components["schemas"]["RedeemRewardErrorInvalidVariantId"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemCustom": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemCustomRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemCustomResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.redeemProductCart": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsRedeemProductCartRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsRedeemProductCartResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"] | components["schemas"]["RedeemRewardErrorInvalidVariantId"] | components["schemas"]["RedeemRewardErrorMaxCartRedemptionsReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
    "rewards.cancelProductCart": {
        parameters: {
            query?: {
                /** @description The sales channel from which this request is made. Must be provided as this query parameter, or the `X-LoyaltyLion-Channel` header */
                channel?: components["schemas"]["SupportedChannel"];
            };
            header?: never;
            path: {
                /** @description Your LoyaltyLion Site ID */
                site_id: number;
            };
            cookie?: never;
        };
        /** @description Body */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RewardsCancelProductCartRequestBody"];
            };
        };
        responses: {
            /** @description 201 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RewardsCancelProductCartResponseBody"];
                };
            };
            400: components["responses"]["ClientErrorBadRequest"];
            /** @description 401 */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 403 */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            message: string;
                            details?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
            /** @description 422 */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: components["schemas"]["RedeemRewardErrorInsufficientPoints"] | components["schemas"]["RedeemRewardErrorCustomerNotEnrolled"] | components["schemas"]["RedeemRewardErrorCustomerBlocked"] | components["schemas"]["RedeemRewardErrorRewardNotEnabledForCustomer"] | components["schemas"]["RedeemRewardErrorRewardOutOfStock"] | components["schemas"]["RedeemRewardErrorRewardInvalidKind"] | components["schemas"]["RedeemRewardErrorRewardLimitReached"];
                    };
                };
            };
            /** @description 429 */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "rate_limited";
                        };
                    };
                };
            };
        };
    };
}
