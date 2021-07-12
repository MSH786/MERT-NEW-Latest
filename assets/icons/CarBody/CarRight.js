import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CarRight(props) {
  const {
    onPressFrontTyre,
    FrontTyreColor,
    onPressBackTyre,
    BackTyreColor,
    onPressBackDoor,
    BackDoorColor,
    onPressFronDoor,
    FrontDoorColor
  } = props;
  return (
    <Svg
      width="76"
      height="242"
      viewBox="0 0 76 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M56.8093 181.737C56.7347 181.742 56.7135 181.748 56.7135 181.742C56.6975 181.748 56.6602 181.753 56.5857 181.769C56.3248 181.822 56.0745 181.881 55.8189 181.961C55.7923 181.966 55.6592 182.024 55.6219 182.04C55.5527 182.078 55.4888 182.11 55.4195 182.147C55.3716 182.173 55.329 182.205 55.2811 182.232C55.2225 182.285 55.1693 182.344 55.116 182.397C55.1054 182.413 55.0894 182.439 55.0681 182.461C55.8136 182.248 56.5431 181.982 57.2566 181.694C57.2406 181.694 57.2246 181.694 57.214 181.694C57.0755 181.71 56.9424 181.721 56.8093 181.737Z"
        fill="#979287"
      />
      <Path
        d="M62.3098 0.378662H53.609L51.2341 2.75186L48.5398 3.0126C46.9955 3.00196 45.052 3.77351 43.7687 4.50782C39.8176 6.76396 36.9316 10.8612 34.9347 14.8467C33.3053 18.1032 32.0859 21.6683 31.0742 25.1589C29.7377 29.7883 28.726 34.5453 27.9059 39.2917C27.5279 41.484 27.1711 43.7189 26.9155 45.9271L26.9049 46.0176V55.4199C25.76 57.6442 24.6418 59.8897 23.5342 62.1352C21.0049 67.254 18.5449 72.4155 16.2072 77.6248C14.7855 80.7909 13.4064 83.9835 12.1231 87.2134C11.0421 89.9272 9.99314 92.7154 9.19441 95.5249C9.10389 95.8442 9.01337 96.1582 8.91752 96.4721C7.99633 99.5849 6.96331 102.666 6.02613 105.773C4.91324 109.456 3.95476 113.148 3.20928 116.926C2.19224 122.109 1.57987 127.356 1.25506 132.629C0.813093 139.897 0.898301 147.214 1.26572 154.483C1.40949 157.287 1.64377 160.086 1.95794 162.879C3.59267 177.331 7.29877 191.89 11.9101 205.671C13.4809 210.365 15.1795 215.02 17.0166 219.613C17.6982 221.315 18.3958 223.029 19.1412 224.705V240.083L24.8548 231.878L37.054 233.878L46.7985 235.182L50.5312 241.232H66.772L69.2108 232.122L73.3003 228.031V211.386L71.394 211.839C70.0042 212.168 68.5772 212.333 67.1501 212.333C57.0169 212.333 48.8007 204.123 48.8007 193.997C48.8007 183.871 57.0169 175.66 67.1501 175.66C69.4238 175.66 71.6709 176.076 73.7902 176.9L75.7551 177.661L76 174.16V70.5265L75.8562 66.4718L73.8221 67.2647C71.6922 68.0948 69.4398 68.5151 67.1554 68.5151C57.0223 68.5151 48.806 60.3047 48.806 50.1787C48.806 40.0527 57.0223 31.8422 67.1554 31.8422C69.0032 31.8422 70.8402 32.1136 72.6028 32.6617L74.6901 33.3108L74.6049 30.8525V10.7867L72.2886 0.91077H67.656L66.7401 3.83204H64.312L62.3098 0.378662ZM63.3162 5.36984C63.3428 5.36984 63.3748 5.37516 63.4014 5.37516L63.4067 5.3858H63.689L63.87 5.39644C63.9073 5.39644 63.9392 5.39645 63.9712 5.3858H67.8796L67.8956 5.33791C67.9062 5.36452 67.9222 5.39112 67.9329 5.41773C67.9275 5.36984 67.9169 5.32727 67.9169 5.27406C67.9169 5.04525 67.9701 4.84837 68.0553 4.68342C68.0819 4.42801 68.1671 4.21516 68.3003 4.05021L68.7955 2.46453H71.0585L73.05 10.9676V30.8791L73.0607 31.1824C71.9265 30.8312 70.7497 30.5758 69.541 30.4321V30.3789C69.2907 30.4055 69.0351 30.3683 68.8061 30.2725V30.3576C68.263 30.3151 67.7092 30.2885 67.1554 30.2885C60.92 30.2885 55.3502 33.1565 51.7027 37.6475C51.7134 37.6103 51.7134 37.573 51.7134 37.5305C51.6495 37.6475 51.5643 37.7486 51.4684 37.8338C51.4631 37.8391 51.4578 37.8391 51.4578 37.8444C51.4365 37.8657 51.4152 37.887 51.3885 37.9083C51.4365 37.9029 51.4791 37.8923 51.527 37.8657C48.8539 41.2499 47.2618 45.5227 47.2618 50.168C47.2618 61.1508 56.1702 70.0529 67.1607 70.0529C67.2353 70.0529 67.3152 70.0529 67.3897 70.0529C67.2885 72.3676 67.2992 73.5542 67.3205 74.1129C66.7295 73.9267 66.0106 73.8149 65.1266 73.8149C61.4738 73.8149 47.3949 73.3786 40.9678 73.1711L40.9731 73.1019C40.7548 73.1445 40.5312 73.1285 40.3128 73.07C40.2862 73.07 40.2649 73.07 40.2383 73.0647L40.233 73.1445C38.758 73.0966 37.8261 73.0647 37.7303 73.0647C37.725 73.0647 35.7921 72.9263 34.562 73.7085C34.8336 68.6322 35.217 60.8315 35.0732 59.73C35.0466 59.5491 34.9827 59.4054 34.8815 59.299C34.6259 59.033 34.2478 59.0649 33.7793 59.3948C33.4544 59.6236 33.0444 60.0174 32.5705 60.5708C30.7228 62.7205 27.7196 67.4403 24.4661 74.4801C21.8782 80.0779 18.7525 86.8622 16.0049 93.6839C13.252 100.505 10.8771 107.354 9.79079 113.085C9.6204 113.803 9.45534 114.532 9.30091 115.266C9.14117 116 8.99207 116.735 8.8483 117.464C7.83125 122.705 7.20292 127.904 6.88343 132.996C6.86213 133.049 6.8568 133.113 6.86745 133.172C6.86745 133.182 6.87278 133.193 6.87278 133.204C6.80356 134.369 6.74499 135.529 6.70771 136.684C6.65979 136.758 6.63848 136.848 6.64913 136.939C6.65446 136.987 6.67044 137.029 6.69174 137.067C6.2977 149.497 7.65553 161.118 9.51391 170.797C9.51391 170.829 9.52456 170.861 9.53521 170.893C9.7056 171.781 9.88131 172.654 10.057 173.511C10.0411 173.607 10.0624 173.702 10.1103 173.777C13.1614 188.287 17.1125 197.743 17.1338 197.801L17.3148 198.248C17.3255 198.254 17.3308 198.259 17.3414 198.27L27.0912 189.66L27.3948 184.233C30.0306 185.84 30.1637 185.941 30.1637 185.946L30.201 185.973L30.2382 185.989C30.2382 185.989 30.6056 186.159 31.2393 186.351L31.2233 186.558C31.4683 186.563 31.7132 186.595 31.9475 186.659L31.9582 186.542C33.5716 186.931 36.1275 187.218 38.8112 186.212C40.9359 185.419 44.7431 182.583 48.7421 179.614C50.7123 178.151 52.7251 176.656 54.5941 175.357C54.6953 175.336 54.7858 175.277 54.8391 175.192C56.9317 173.75 58.8327 172.574 60.2598 172C61.4046 171.542 62.4908 171.223 63.4972 170.925C67.3418 169.791 69.9723 169.02 69.9723 162.831V77.5876C69.9829 77.3588 70.0149 75.4325 68.0766 74.4322C68.0553 74.23 67.9861 73.2349 68.1299 70.0476C70.3344 69.9412 72.443 69.4782 74.4026 68.7173L74.4665 70.5584C74.4665 174.112 74.4665 174.112 74.4665 174.112L74.3706 175.458C72.1395 174.591 69.706 174.117 67.1661 174.117C56.1756 174.117 47.2671 183.02 47.2671 194.002C47.2671 196.918 47.8954 199.69 49.0243 202.186C49.019 202.191 49.0137 202.197 49.003 202.202C49.1468 202.399 49.2639 202.622 49.3438 202.878L49.3491 202.872C52.6133 209.407 59.3598 213.892 67.1661 213.892C68.7529 213.892 70.2918 213.706 71.7721 213.355V227.403L68.1938 230.978C68.1352 231.436 67.9435 231.856 67.6134 232.181L65.6006 239.694H51.4152L48.2149 234.506L47.8475 233.676C47.5546 233.666 47.2618 233.618 46.9849 233.522L47.0435 233.655L37.3043 232.351L36.5216 232.224L36.5322 232.133C36.2873 232.128 36.0423 232.091 35.808 232.021L35.7974 232.101L24.743 230.292C24.759 230.265 24.7749 230.233 24.7856 230.207C24.5193 230.223 24.2531 230.202 23.9975 230.148C23.9975 230.175 23.9975 230.202 23.9975 230.228C23.9017 230.42 23.7206 230.776 23.5981 231.021L20.7227 235.155V224.896C20.728 224.896 20.7334 224.896 20.7387 224.896C20.7334 224.817 20.728 224.737 20.728 224.652C20.728 224.572 20.7387 224.492 20.744 224.418C20.6961 224.332 20.6535 224.247 20.6162 224.151C19.2158 220.969 4.48192 186.819 2.84187 154.424C1.12194 120.412 7.04317 108.785 10.7067 95.9719C14.3702 83.1641 28.481 55.819 28.481 55.819V46.1293C28.481 46.1293 30.7441 26.7499 36.3458 15.5544C38.0658 12.1223 39.8815 9.76505 41.5802 8.14212V8.22194C41.7293 7.90799 42.0008 7.70047 42.315 7.59937V7.53552C42.315 7.51424 42.315 7.49827 42.3097 7.48231C45.8134 4.48654 48.625 4.577 48.625 4.577C48.8699 4.56635 51.1809 4.46525 51.298 4.73131C51.4578 4.73131 51.6175 4.75791 51.7666 4.8058C51.8252 4.51314 51.969 4.27902 52.166 4.11938C52.15 4.04489 52.347 3.86929 52.7517 3.46489L54.2799 1.93774H61.4472L63.002 4.62489C62.9594 4.62489 62.9115 4.61957 62.8689 4.61957C63.0713 4.7792 63.2523 5.02929 63.3162 5.36984ZM68.0127 75.2676C69.328 76.1562 69.2215 77.5556 69.2162 77.561V133.422C68.6943 133.278 67.1235 132.884 64.1895 132.357C64.1895 132.326 64.1948 132.288 64.1948 132.256C63.9499 132.251 63.7049 132.214 63.4706 132.145L63.4653 132.23C62.9541 132.145 62.411 132.054 61.8306 131.958C56.4099 131.091 37.7942 131.628 37.741 131.634H37.7143L36.2873 131.889V131.879C36.005 132.033 35.6696 132.097 35.3767 132.054L30.2382 132.975L30.7547 123.753L33.3692 90.1985C34.4715 89.5547 35.2862 88.4426 35.8346 87.1921C36.5801 85.4841 36.8251 83.5046 36.5961 82.1318V82.1158C36.5855 82.052 36.5748 81.9881 36.5641 81.9243C36.6174 81.871 36.6547 81.7966 36.6653 81.7114C36.6653 81.7114 36.7399 80.9824 37.054 80.1151C37.5546 78.7423 37.4641 77.1672 37.0221 76.2467C36.857 75.8955 36.6334 75.6294 36.3671 75.4751C36.0689 75.2995 35.7228 75.2729 35.3554 75.4325C35.0572 75.5602 34.743 75.8316 34.4182 76.2733C34.4449 75.8263 34.4715 75.3155 34.5034 74.7461C35.2489 73.634 37.677 73.8043 37.6824 73.8043H37.693C37.7037 73.8043 38.6462 73.8362 40.1691 73.8841L40.1638 73.9746C40.4034 73.916 40.659 73.916 40.8986 73.9746L40.9039 73.9054C47.3363 74.1129 61.5111 74.5546 65.1213 74.5546C66.0425 74.5546 66.7561 74.6929 67.3152 74.9004L67.3045 75.0654C67.5601 75.1612 67.7997 75.2942 68.0074 75.4591C68.0074 75.4006 68.0074 75.3368 68.0127 75.2676ZM54.2374 174.527L54.1894 174.745C52.2991 176.054 50.2703 177.56 48.2895 179.034C44.3331 181.977 40.5631 184.775 38.5397 185.536C35.9518 186.505 33.497 186.196 32.0008 185.818L32.0061 185.765C31.7505 185.76 31.5002 185.691 31.2872 185.558L31.2819 185.616C30.8772 185.488 30.6216 185.377 30.5471 185.345C30.4033 185.249 29.8069 184.871 27.432 183.424L27.5492 181.29C27.6503 181.29 27.6024 181.21 27.5545 181.157L30.1956 133.736L35.4779 132.788L35.4726 132.868C35.6643 132.767 35.8772 132.698 36.1009 132.687C36.1435 132.687 36.1808 132.693 36.218 132.698L36.2234 132.655L37.7835 132.379C38.5343 132.357 56.4631 131.857 61.7081 132.698C62.2832 132.788 62.821 132.879 63.3215 132.964L63.2896 133.102C63.5345 133.102 63.7795 133.134 64.0191 133.198L64.0404 133.092C67.6879 133.741 69.1895 134.193 69.1948 134.193H69.2055V162.853C69.2055 168.493 66.788 169.206 63.2576 170.244C62.2353 170.542 61.1277 170.871 59.9562 171.34C58.6303 171.872 56.9317 172.893 55.0574 174.155L55.084 174.038C54.8444 174.245 54.5515 174.415 54.2374 174.527ZM10.3286 157.436C9.91859 152.375 9.74288 146.836 9.73756 140.254L29.333 138.099C28.4544 152.322 27.645 166.556 26.8463 180.886L19.2957 176.193L19.2744 176.225C17.4266 175.033 15.1476 173.596 12.3361 171.867C12.3361 171.851 12.3308 171.835 12.3254 171.819C11.3829 167.136 10.7386 162.539 10.3286 157.436ZM11.4788 171.35C11.0581 171.095 10.6321 170.834 10.1902 170.563C8.52348 161.842 7.26682 151.551 7.33604 140.515L8.99739 140.334C9.00272 146.921 9.18377 152.455 9.58846 157.494C9.99315 162.406 10.6055 166.854 11.4788 171.35ZM9.80677 133.113L29.8548 129.697C29.7803 130.825 29.7111 131.953 29.6418 133.081L29.2851 133.145C29.2265 133.156 29.1733 133.182 29.1307 133.214L7.43189 136.46C7.46916 135.46 7.51709 134.454 7.57567 133.443L9.42338 133.166V133.177L9.80677 133.113ZM33.5982 77.7366C33.5716 77.8004 33.545 77.8643 33.5183 77.9281C32.9006 77.7525 32.1765 77.7206 31.3405 77.8589C31.1275 77.8909 30.9038 77.9388 30.6749 78.0026V74.3896L25.9144 73.1125C28.8218 67.0678 31.4523 62.9865 33.119 61.055C33.5556 60.5442 33.9177 60.193 34.1946 60.0014C34.3224 59.9109 34.3224 59.7886 34.349 59.8152C34.3597 59.8258 34.3384 59.8098 34.3384 59.8311C34.4875 60.9432 34.0508 69.5527 33.7793 74.5333C33.7526 74.5865 33.726 74.645 33.6994 74.7035C33.6515 74.8259 33.6728 74.9643 33.7473 75.0601C33.6781 76.3052 33.6248 77.2683 33.5982 77.7366ZM35.643 76.0977C35.7761 76.0391 35.8985 76.0445 35.9997 76.103C36.1328 76.1828 36.2606 76.3424 36.3618 76.5606C36.7346 77.3322 36.7985 78.6731 36.3618 79.865C36.2819 80.0885 36.2127 80.3066 36.1595 80.5089C35.8613 79.7586 35.4353 79.0988 34.8442 78.6145C34.7963 78.5081 34.6951 78.423 34.5727 78.407H34.562C34.4715 78.3432 34.3756 78.29 34.2798 78.2368C34.2958 78.1942 34.3064 78.1516 34.3117 78.1037L34.3224 77.9068C34.8123 76.816 35.2649 76.2679 35.643 76.0977ZM29.94 74.9483V78.2527C28.1456 79.0349 27.0486 80.8281 26.6386 82.8182H21.4522C22.7302 79.9821 23.9762 77.2736 25.121 74.794C25.2755 74.4535 25.4352 74.1129 25.5896 73.783L29.94 74.9483ZM30.2435 78.9179C30.2648 78.9179 30.2808 78.9232 30.3074 78.9232C30.4246 78.9232 30.5258 78.87 30.5897 78.7848C30.6642 78.7582 30.7441 78.7369 30.8186 78.7156C31.0157 78.6624 31.2127 78.6252 31.3937 78.5879L31.3777 78.705C31.6227 78.6518 31.8783 78.6305 32.1286 78.6411L32.1499 78.5028C32.9486 78.4762 33.5929 78.6518 34.1041 78.9817L34.0828 79.1254C34.3277 79.2477 34.5514 79.4021 34.7484 79.599L34.759 79.5457C35.2116 80.0619 35.5205 80.743 35.7175 81.5039C35.7814 81.738 35.8293 81.9828 35.8719 82.2329V82.2488C36.0743 83.4993 35.8506 85.3191 35.1584 86.8995C34.6898 87.969 34.0082 88.9268 33.1083 89.4961L33.1243 89.4057C32.8847 89.5813 32.6078 89.7143 32.3202 89.7995L32.3096 89.874C32.1445 89.9272 31.9795 89.9697 31.8037 89.9963H31.7931C31.2606 90.0815 30.776 90.0655 30.3341 89.9697L30.3501 89.8686C30.1051 89.8207 29.8708 89.7463 29.6472 89.6398L29.6312 89.725C29.0082 89.427 28.5077 88.9375 28.1243 88.3308C27.7143 87.6817 27.432 86.8941 27.2883 86.0534C27.1445 85.202 27.1338 84.2975 27.267 83.4195C27.5652 81.4666 28.5502 79.6468 30.2435 78.9179ZM31.9156 90.72H31.9262C32.1605 90.6828 32.3895 90.6242 32.6078 90.5497C31.612 103.405 30.7228 116.181 29.9028 128.952L10.1263 132.32C10.1742 131.676 10.3286 130.006 10.8078 125.69L10.8398 125.413C11.0528 123.466 11.761 117.017 13.1881 111.18C14.5619 105.587 16.564 99.5902 18.449 94.8864C20.4192 89.9751 22.1764 86.5057 22.8314 86.5057H26.6333C26.8037 87.3198 27.0966 88.0754 27.5066 88.7246C28.4171 90.1719 29.8921 91.0499 31.9156 90.72ZM26.5162 83.5525C26.4256 84.2921 26.4256 85.0477 26.5108 85.782H22.8314C21.8569 85.782 19.8441 89.4429 17.7674 94.6204C15.8718 99.3508 13.8537 105.38 12.4745 111.009C11.0315 116.894 10.3233 123.375 10.1103 125.339L10.0783 125.61C9.5778 130.139 9.43403 131.82 9.39143 132.437L7.61826 132.703C7.94308 127.755 8.56076 122.705 9.55118 117.613C9.69495 116.884 9.84405 116.155 9.99847 115.426C10.1529 114.713 10.3126 113.989 10.4883 113.26L10.4937 113.244C11.564 107.567 13.9282 100.756 16.6652 93.9659C18.0922 90.4327 19.6151 86.9101 21.1221 83.5525H26.5162ZM29.349 133.922C29.4182 133.911 29.4768 133.885 29.5247 133.847L29.5939 133.837C29.5194 135.013 29.4448 136.183 29.3756 137.359L7.35202 139.78C7.36267 138.924 7.37864 138.067 7.40527 137.205L29.349 133.922ZM18.9762 176.687L18.9655 176.709L26.8037 181.583L26.7238 182.988C24.1626 181.434 19.908 178.869 12.8473 174.639C12.3947 174.367 12.0911 174.187 11.7876 174C11.4362 173.787 11.0794 173.569 10.7546 173.378C10.6268 172.771 10.5043 172.159 10.3819 171.537C13.9176 173.681 16.7344 175.368 18.9762 176.687ZM11.4096 174.623C11.7184 174.809 12.0219 174.995 12.2828 175.15C12.991 178.316 13.8324 181.556 14.8228 185.052C15.8079 188.543 16.9474 192.31 18.2467 196.503L17.613 197.062C16.8036 195.019 13.5874 186.547 10.9676 174.351C11.122 174.447 11.2658 174.532 11.4096 174.623ZM15.5203 184.855C14.6045 181.609 13.8164 178.587 13.1455 175.671C20.1317 179.853 24.2478 182.338 26.6759 183.812L26.3671 189.325L18.8377 195.976C17.5864 191.922 16.4841 188.266 15.5203 184.855Z"
        fill="#979287"
      />
      <Path
        d="M53.625 4.41741L53.6569 4.59832L53.0073 5.12511L52.6239 6.96088L50.6963 6.32235L49.5408 6.31703L49.461 6.14144C49.0989 6.13612 48.6409 6.14144 48.1457 6.16804L48.0712 6.17336H47.9966C47.9434 6.17336 46.2181 6.21061 43.8326 7.924C43.3587 8.01446 42.8954 8.23262 42.4854 8.58382C41.708 9.25427 41.069 10.0897 40.5791 10.9889C40.3927 11.3348 40.2064 11.6807 40.004 12.0159C39.7165 12.1223 39.4715 12.3245 39.3278 12.6172C39.2213 12.7555 39.1414 12.9258 39.1041 13.1227C39.0935 13.1333 39.0828 13.144 39.0722 13.1599V13.1387C39.0402 13.1866 39.0136 13.2344 38.9816 13.2823C38.7686 13.4473 38.6089 13.6761 38.545 13.9847C38.119 14.6924 37.709 15.4374 37.315 16.2302C33.5077 23.8394 31.25 35.4446 30.2329 41.798C30.2542 42.4791 30.2915 43.0485 30.3607 43.5859C30.6056 45.5441 31.218 47.4969 31.7878 49.1517C32.3522 50.796 33.071 52.536 34.0348 54.6325C34.1999 54.989 34.4395 55.3668 34.6898 55.7659C34.8655 56.0425 35.0413 56.3246 35.2063 56.6066C35.6643 57.4047 36.1222 58.3572 36.1701 59.4693C36.1967 59.5704 36.2127 59.6715 36.2287 59.7726C36.2766 60.1557 36.4044 61.1029 35.8666 71.6546C36.4417 71.6067 36.9156 71.6173 37.1606 71.6333C37.2404 71.6333 37.4854 71.644 37.8741 71.6546L37.8901 71.4737C38.0498 71.5429 38.2255 71.5854 38.4172 71.5854C38.7207 71.5854 39.0242 71.5748 39.3278 71.5695L40.0892 71.6812L40.5365 71.5961C40.9146 71.628 41.2873 71.6706 41.6654 71.7185C41.889 71.7451 42.1127 71.7663 42.3416 71.777V71.7983C49.4077 72.0218 57.0276 72.2506 61.5377 72.341C61.6229 72.3038 61.7134 72.2665 61.7986 72.2346C61.8199 72.1441 61.8466 72.059 61.8732 71.9685C61.788 71.9047 61.7081 71.8408 61.6283 71.777C61.6176 71.7663 61.6123 71.7663 61.6069 71.7557C61.559 71.7185 61.5111 71.6865 61.4632 71.6493C51.9211 69.2654 44.8283 60.6293 44.8283 50.3649C44.8283 46.7679 45.6803 43.3145 47.315 40.2017H47.2937C47.5387 39.8984 47.757 39.5844 47.9487 39.2971C48.5451 38.4138 49.1894 37.5731 49.5941 36.6046L49.6207 36.5834L49.7751 36.3013C50.4141 35.7426 51.0105 35.136 51.5962 34.5188C52.0542 34.0399 52.5121 33.561 52.9381 33.0608L52.9434 33.3215C56.74 30.2353 61.4685 28.4953 66.4579 28.4208C66.7188 28.4847 66.985 28.5326 67.2619 28.5698C67.5388 28.607 67.8104 28.6336 68.0926 28.623C68.3429 28.6124 68.5985 28.5964 68.8488 28.5911C69.0298 28.5911 69.2055 28.5485 69.3653 28.474L70.8775 28.3197V10.973L70.0894 7.61006C70.0202 7.56217 69.9457 7.50895 69.8711 7.46639C69.7859 7.41317 69.7007 7.36529 69.6155 7.3174C69.5783 7.30143 69.5463 7.28015 69.509 7.26418C69.312 7.20033 69.1256 7.12584 68.9233 7.07795C68.8487 7.06199 68.7742 7.04602 68.6997 7.03006C68.6677 7.02474 68.6571 7.01942 68.6464 7.01409C68.5346 6.99813 68.4174 6.99281 68.3109 6.98749C67.6826 6.95556 67.049 6.99813 66.4206 6.99813C66.3301 6.99813 66.2449 6.98749 66.1597 6.97152H63.7049C63.6304 6.97685 63.5558 6.98217 63.476 6.98217L61.9744 6.97152L61.9424 6.91831L61.394 6.89703L61.1384 5.69979L57.9807 3.4809H54.5249L53.625 4.41741Z"
        fill={FrontTyreColor}
        onPress={onPressFrontTyre}
      />
      <Path
        d="M37.3629 190.075C35.2862 190.214 32.9699 190.373 31.1328 191.437C30.9252 191.56 30.7175 191.618 30.5205 191.624C30.3874 191.65 30.2596 191.672 30.1318 191.714C29.8762 191.794 29.7963 191.826 29.6685 191.884C29.2372 192.081 28.8165 192.31 28.4118 192.555C27.6504 193.007 26.8942 193.481 26.1701 193.986C25.2648 194.619 24.4075 195.306 23.4757 195.843C23.3532 195.944 23.2307 196.04 23.0923 196.125C22.5172 196.477 21.9368 196.838 21.3564 197.2L17.5172 200.574L17.3628 200.457C17.2137 200.558 17.0699 200.659 16.9314 200.755L16.1381 201.303C15.9304 201.473 15.7174 201.638 15.5044 201.803C15.3713 201.904 15.2382 202.005 15.1104 202.112C14.9453 202.245 14.7696 202.388 14.6045 202.543C18.2573 213.861 21.6546 221.784 22.3149 223.289C22.3415 223.348 22.3468 223.369 22.3575 223.391L22.6344 223.885L22.5864 224.524C22.5864 224.572 22.5864 224.604 22.5864 224.63L22.6663 225.593L22.2776 228.068L49.2586 232.282L49.839 233.602L52.4162 237.805L64.1309 237.837L65.9254 231.213L66.2981 230.856C66.3034 230.851 66.3194 230.813 66.3301 230.75L66.4153 230.122L69.903 226.652L69.935 215.606C69.0298 215.718 68.1139 215.771 67.1927 215.771C59.7432 215.749 52.9807 212.014 49.003 205.874L48.9977 205.879C48.9391 205.772 48.8752 205.671 48.806 205.576C48.6143 205.304 48.4439 205.033 48.2895 204.735C47.8955 203.985 47.544 203.213 47.1713 202.447C47.1446 202.394 47.1127 202.346 47.0754 202.298C47.0382 202.207 47.0009 202.117 46.9583 202.026C46.9583 202.026 46.9583 202.026 46.9583 202.021C46.937 201.968 46.9157 201.915 46.8944 201.867C46.8837 201.835 46.8784 201.798 46.8624 201.766C46.8518 201.739 46.8358 201.707 46.8252 201.681C46.8305 201.5 46.7932 201.335 46.7133 201.18C46.7027 201.148 46.6814 201.117 46.6707 201.085C45.8827 198.802 45.4833 196.413 45.4939 193.96C45.4993 192.544 45.643 191.145 45.9199 189.772C45.8773 189.777 45.8347 189.783 45.7921 189.783C42.97 189.788 40.1691 189.889 37.3629 190.075Z"
        fill={BackTyreColor}
        onPress={onPressBackTyre}
      />
      <Path
        d="M59.2106 170.446C60.3289 170.004 61.3779 169.701 62.347 169.419C65.7016 168.445 67.9966 167.78 67.9966 162.501V135.688H67.9913C67.986 135.688 66.559 135.268 63.0925 134.656L63.0712 134.757C62.8475 134.699 62.6132 134.672 62.3789 134.667L62.4056 134.539C61.9263 134.459 61.4205 134.374 60.872 134.289C55.8879 133.501 38.8591 133.97 38.1455 133.991L36.6599 134.252L36.6546 134.294C36.6173 134.294 36.58 134.284 36.5428 134.284C36.3298 134.294 36.1274 134.358 35.9464 134.454L35.9517 134.379L30.9357 135.268L28.4277 179.641C28.4703 179.688 28.5129 179.763 28.4224 179.768L28.3105 181.764C30.5683 183.115 31.1327 183.472 31.2712 183.562C31.3404 183.594 31.5853 183.695 31.9687 183.818L31.974 183.764C32.1764 183.887 32.416 183.956 32.6556 183.961L32.6503 184.014C34.072 184.366 36.4043 184.658 38.8591 183.754C40.7814 183.046 44.3596 180.423 48.119 177.672C50.004 176.294 51.9263 174.884 53.7207 173.66L53.7633 173.457C54.0615 173.351 54.3384 173.197 54.578 172.989L54.5567 173.096C56.3352 171.893 57.9487 170.941 59.2106 170.446Z"
        fill={BackDoorColor}
        onPress={onPressBackDoor}
      />
      <Path
        d="M67.9915 79.2318V79.4234C67.9915 79.4234 67.9967 79.3489 67.9915 79.2318Z"
        fill="#979287"
      />
      <Path
        d="M38.3266 75.672C38.5502 76.3637 38.5982 77.1193 38.5023 77.8962C38.4118 78.6358 38.3532 79.434 38.0976 80.1364C38.0444 80.28 37.9858 80.4184 37.9272 80.5621C37.8846 81.0356 37.7941 81.5199 37.6344 81.9828C37.5971 82.0945 37.5598 82.2063 37.5279 82.3127C37.5651 82.3819 37.6024 82.4511 37.6344 82.5256C38.0817 83.5738 37.9592 84.7976 37.7835 85.8938C37.6131 86.9687 37.2457 88.0595 36.7078 89.012C36.4469 89.4696 36.1434 89.9006 35.8292 90.3263C35.6482 90.6136 35.4512 90.885 35.2329 91.1297C35.169 91.2202 35.0997 91.3107 35.0358 91.4011C34.8335 91.6831 34.5619 91.8906 34.2584 91.9917C34.2265 92.013 34.1892 92.0396 34.1572 92.0609L31.6918 125.616L31.4043 131.075L36.0529 130.192C36.3351 130.234 36.6493 130.176 36.9155 130.016V130.027L38.2627 129.771H38.2893C38.3426 129.771 55.9093 129.234 61.0211 130.096C61.5696 130.192 62.0861 130.282 62.5653 130.367L62.5706 130.282C62.7943 130.346 63.0233 130.383 63.2576 130.394C63.2576 130.426 63.2522 130.463 63.2522 130.495C66.0212 131.017 67.5014 131.416 67.9967 131.559V79.2318C67.9807 78.8168 67.8263 77.8217 66.8625 77.13C66.8571 77.1938 66.8518 77.263 66.8518 77.3268C66.6495 77.1566 66.4258 77.0289 66.1862 76.9331L66.1969 76.7681C65.6697 76.5553 64.9988 76.4223 64.1255 76.4223C60.7176 76.4223 47.3469 75.9806 41.2766 75.7731L41.2712 75.8423C41.0423 75.7837 40.8026 75.7837 40.579 75.8423L40.5843 75.7518C39.3756 75.7092 38.5662 75.6773 38.3266 75.672Z"
        fill={FrontDoorColor}
        onPress={onPressFronDoor}
      />
    </Svg>
  );
}

export default CarRight;