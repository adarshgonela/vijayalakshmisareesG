
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.VEVsSDVr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.2TezYJMG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact.B8_l_hIG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.BIRs_bT9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.DFwaFl9s.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedDeliveryAddress.Br9fQT0-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.D2DZ58C9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.CVajDXjs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.cQ8UXQLk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OptionDetails.DMoO6MTn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.BScndQXk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.CM9GNf0V.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.D9siuH9L.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useIsOriginatedFromShop.B4alZ--5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSessionExchange.U4p6J3tp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGetUlcFrameUri.CaJYY-Oj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.BluSSKFp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.L8Tp0JB9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/GooglePayButton.CejsE9lb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.LCkpn9_m.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.CjTTfEP2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ExpandedMerchandisePreview.Dgroai_r.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.Bj47PGKp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.nChP2cUv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/CheckoutAsGuest.DtXuyeBV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ButtonWithRegisterWebPixel.C4whJAfG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/NoAddressLocationFullDetour.CWyrKdPv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.DUjI8SyR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.D-fJWmSw.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.1irZc33e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedContact.CxMuAABI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.2CoGBgSI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useUnauthenticatedErrorModal.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OptionDetails.BgrbqXV7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.VSphTxMd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LegacyVaultedShippingMethods.DytT_hpK.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/GooglePayButton.C9QQ9NQG.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ExpandedMerchandisePreview.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ButtonWithRegisterWebPixel.B6bwbcOx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/NoAddressLocationFullDetour.DU8rC2PR.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/muli/muli_n4.32796dd29ef52f78859bd8685b2d63db23ffd695.woff2?h1=c3VkYXRoaS5jb20&hmac=9d0d522400f2606cf4fdd66dcf75fcc925d135181da279e160a48484cd1e2a7d","https://fonts.shopifycdn.com/muli/muli_n7.5088b0a619cd5498c63f83358f68a9bd968d602f.woff2?h1=c3VkYXRoaS5jb20&hmac=1bacc55beb6f3264b7879c6e0117c1fddf9ef9ebee79c5cfc9d4b9437e10add7"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0818/7107/7663/files/Sudathi_PNG1_x320.png?v=1693889337"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  