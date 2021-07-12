import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FilterCarTypeSix(props) {
  return (
    <Svg
      width={63}
      height={19}
      viewBox="0 0 63 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M61.9443 15.2298L61.9258 15.0051C61.901 14.7135 61.765 14.4219 61.5608 14.4219H61.5423C61.3505 14.4401 61.1773 14.6892 61.1217 14.9139C61.0598 15.1387 61.0042 15.3635 60.9918 15.4242L60.9361 15.7219L59.2661 15.4911C59.3589 15.3999 59.4578 15.3088 59.5444 15.2359C59.9155 14.9261 60.4908 14.4522 60.8186 14.1849C61.1526 13.9177 61.499 13.4681 61.598 13.1826C61.6969 12.891 61.7278 12.484 61.6722 12.2653C61.6165 12.0527 61.5175 11.6942 61.4619 11.4816C61.4 11.2629 61.2083 10.868 61.0351 10.6068C60.8619 10.3395 60.5093 9.811 60.2557 9.42828C60.0021 9.04556 59.6372 8.70537 59.4516 8.68107C59.2599 8.65677 57.9795 8.4806 56.6064 8.29227C55.2827 8.15255 53.7054 8.03713 52.3447 7.98245C52.3261 7.86095 52.2828 7.74553 52.2086 7.63011C51.8622 7.10159 51.355 6.41512 51.0767 6.08708C50.7921 5.75295 50.588 5.40668 50.5633 5.32771C50.5509 5.27911 50.5818 5.12724 50.6499 5.03611C50.7179 4.96929 51.0705 4.80527 51.4787 4.75667C51.9241 4.70199 52.8519 4.64732 53.5508 4.62909C54.1632 4.61087 54.559 3.94263 54.5899 3.29868C54.6209 2.61222 54.2497 2.12622 53.6374 2.0594C52.7838 1.9622 51.9983 1.87108 51.7199 1.8407L51.6148 1.09956C51.5715 0.80189 51.3921 0.783665 50.7859 0.735066C50.4705 0.710766 50.0128 0.674317 49.4623 0.637867C48.2994 0.558893 46.7717 0.461694 45.2624 0.37057C43.3883 0.261222 38.8358 0 37.0792 0C36.5287 0 36.405 0.0242997 36.3184 0.0546743C35.6566 0.273372 34.4813 0.656092 33.6958 0.905164C32.9041 1.16031 31.6113 1.61593 30.8134 1.93183C30.0093 2.24165 28.7785 2.79447 28.0609 3.15896C27.3496 3.52346 25.8713 4.2889 24.7642 4.86601C23.7003 5.42491 22.3642 5.98988 21.8508 6.11137C21.3127 6.23895 20.3787 6.42727 19.7788 6.53054C19.6983 6.54269 19.5252 6.57307 19.3891 6.67027C18.9252 6.66419 18.4551 6.66419 18.0036 6.66419C15.7026 6.65204 12.4429 6.71279 10.7667 6.79784C9.09046 6.88289 6.93177 6.99224 5.97922 7.05299C5.02668 7.11374 3.55456 7.24739 2.71335 7.35673C1.87214 7.46608 1.12372 7.56328 1.04949 7.57543C0.969082 7.58758 0.975267 7.65441 1.05568 7.73338C1.13609 7.81235 1.56906 8.22545 2.01441 8.65069C2.45975 9.07594 3.38137 9.99933 4.06795 10.6979C4.74834 11.3966 5.89881 12.5143 6.6225 13.1887C7.34619 13.863 8.45955 14.8228 9.10283 15.3331C9.7461 15.8373 10.8471 16.4448 11.5522 16.6878C12.2574 16.9308 13.581 17.2832 14.4965 17.4776C15.4119 17.672 17.9664 17.8846 20.1684 17.9575C22.3704 18.0304 26.094 18.0304 28.4321 17.9575L31.3454 17.8664C33.6834 17.7935 37.5122 17.678 39.8564 17.6112L46.1717 17.4229C48.5097 17.3561 52.0911 17.2406 54.126 17.1677C56.161 17.1009 57.8806 17.0402 57.9548 17.0402C58.029 17.0402 58.264 16.7607 58.4805 16.4205C58.5176 16.3658 58.5671 16.299 58.6166 16.2261C58.7836 16.3051 58.9383 16.4084 59.0248 16.5299L59.1238 16.6574C59.3032 16.8944 59.5506 17.1799 59.6681 17.2832C59.798 17.3986 60.064 17.5079 60.2805 17.5383C60.2928 17.5383 60.3052 17.5383 60.3238 17.5383C60.4104 17.5383 60.497 17.5019 60.5588 17.435C60.6578 17.3257 60.7011 17.1556 60.6763 16.9612L60.6578 16.8032C60.6269 16.5542 60.664 16.3901 60.6949 16.3537L60.9732 16.3112L60.998 16.8397C61.0103 17.0645 61.066 17.4411 61.1774 17.5565C61.233 17.6112 61.3134 17.6477 61.3938 17.6477C61.4557 17.6477 61.5237 17.6294 61.567 17.5869C61.6784 17.5019 61.7773 17.1981 61.8206 16.9369C61.8639 16.6757 61.9258 16.378 61.9567 16.2687C61.9938 16.1472 62.0124 15.9831 62.0062 15.8981C61.9938 15.8191 61.9691 15.5154 61.9443 15.2298ZM29.6506 5.77118C29.4032 5.75903 29.0011 5.7408 28.7599 5.72865L25.2404 5.54033C24.993 5.52818 24.9806 5.42491 25.2033 5.30948L28.8836 3.46271C29.1125 3.34728 29.496 3.26223 29.7434 3.27438L32.4773 3.37158C32.6257 3.37766 32.8237 3.38373 33.0154 3.39588L30.5413 5.80763L29.6506 5.77118ZM36.0648 6.05063C35.8174 6.03848 35.4153 6.02025 35.1741 6.01418L31.0485 5.83193L33.5164 3.42626L36.8132 3.62066L36.1143 6.0567L36.0648 6.05063ZM40.3698 7.01654L39.6709 6.97401C39.4235 6.96186 39.0894 6.77354 38.9163 6.56699L38.8977 6.54269C38.7307 6.33007 38.3905 6.1539 38.1431 6.14175L36.4854 6.06885L37.1844 3.63888L40.3884 3.8272L40.3698 7.01654ZM48.3242 6.52447L48.1386 6.93756C48.0273 7.19271 47.7304 7.39318 47.4892 7.38103L43.8089 7.21094C43.5615 7.19879 43.1594 7.18056 42.9182 7.16234L41.8543 7.10159L41.8729 3.90618L46.4871 4.14917C46.7345 4.16132 47.0747 4.3375 47.2479 4.54404L48.2128 5.68006C48.386 5.89268 48.4355 6.26325 48.3242 6.52447Z"
        fill={props.color}
      />
    </Svg>
  );
}

export default FilterCarTypeSix;