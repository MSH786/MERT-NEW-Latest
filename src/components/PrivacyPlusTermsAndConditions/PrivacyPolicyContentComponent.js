import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const TermsAndConditionContentComponent = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainrect}>
          <ScrollView>
            <View style={styles.txtRect}>
              <Text style={styles.boldText}>Gizlilik Politikası</Text>
              <Text style={styles.normalTextFirstPara}>
                ALICIBUL OTOMOTİV VE BİLGİSAYAR YAZILIM TEKNOLOJİLERİ
                DANIŞMANLIK PAZARLAMA SANAYİ TİCARET LİMİTED ŞİRKETİ (bundan
                sonra <Text style={styles.boldText}>“Alıcıbul”, “bizim”</Text>
                veya <Text style={styles.boldText}>“biz”</Text> olarak
                adlandırılacaktır) gizliliğinize saygı duyar ve Hizmetlerimizi
                kullanırken bize sağlamış olduğunuz kişisel bilgileri korumayı
                taahhüt eder. Bu Gizlilik Politikası hangi verileri
                topladığımızı, neden topladığımızı ve bununla ne yaptığımızı
                anlamanıza yardımcı olacaktır. Lütfen dikkatlice okumak için
                zaman ayırın.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                Eğer bu Politika ile ilgili herhangi bir sorunuz, şikayetiniz
                veya yorumunuz varsa lütfen bizimle iletişim@Alıcıbul.com
                adresinden veya aşağıdaki iletişim adresinden temasa geçin:
                Adres: Zümrütevler Mah. Elifce sokak No :4 Maltepe / İstanbul
              </Text>
              <Text style={styles.normalTextSecondPara}>
                1. Veri tabanının mülkiyeti
              </Text>
              <Text style={styles.normalTextFirstPara}>
                Web Sitesi veya Uygulama aracılığı ile bize sağlamış olduğunuz
                tüm kişisel bilgilerin Alıcıbul’a ait olan bir veri tabanında
                işlendiğini bildirmek isteriz. Hizmet, bir google firması olan
                Google Firebase tarafından verilmektedir.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                2. Bu politika kapsamındaki Web Sitesi, Uygulama ve Hizmetler
              </Text>
              <Text style={styles.normalTextFirstPara}>
                2.1. Şu anda www.alıcıbul.com ("Web Sitesi") sitesini ve
                Uygulamayı, birlikte söyleyecek olursak (“Hizmetleri”)
                işletmekteyiz. Zaman zaman yukarıda listelenmeyen yeni Hizmetler
                ekleyebiliriz; fakat bunlar bu Politikaya ilgili maddelerce
                düzenlenecek biçimde bağlantılanacaktır.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                2.2. Bu gizlilik politikası; Alıcıbul’u kullanımınızı ve aynı
                zamanda Alıcıbul’nun işlediği içeriğinizin, kişisel
                bilgilerinizin ve Hizmete eriştiğinizde Alıcıbul’nun topladığı
                diğer verilerin kullanımını kapsamaktadır.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                3. Sizden hangi kişisel bilgileri topluyoruz
              </Text>
              <Text style={styles.normalTextFirstPara}>
                3.1. Siz, bu Politikada bahsedilen yöntemlerden herhangi biriyle
                bize kişisel bilgi sağlamadığınız müddetçe, herhangi bir kişisel
                bilgi toplamamaktayız. Bu bilgiyi bize doğrudan Hizmetlerimiz
                aracılığı ile sağlayabilirsiniz. Eğer bize kişisel bilgilerinizi
                (örn: isim, e-posta adresi, posta adresi, fotoğraf) sağlamaya
                karar verdiyseniz, biz sadece taleplerinizi ve meşru iş
                hedeflerimizi yerine getirmek için gerekli olan bilgileri
                toplarız. Eğer talep edildiğinde kişisel bilgilerinizi
                açıklamayı reddederseniz, Hizmetlerin bir bölümü gibi belirli
                alanlara (ürün satın alma ve satma gibi) erişemeyebilirsiniz.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                3.2. Uygulama aracılığı ile Alıcıbul’un konumunuzu kaydetmek ve
                yayınlamak ve araçlarınızı size yakın olan kullanıcılara sunmak
                için mobil cihazınız üzerinden coğrafik konumunuzu almasına izin
                veriyorsunuz. Buna ek olarak Alıcıbul’un kimliğinizi doğrulaması
                için telefon numaranızı ve cihazınızın IMEI ve seri numarasını
                toplamasına izin veriyorsunuz. Ayrıca, yüklenmiş fotoğraf veya
                diğer tüm bilgilerin (isim ve konum da dahil olmak üzere),
                Alıcıbul tarafından, ücretsiz olarak, sosyal medya, Facebook
                reklamları, bültenler ve herhangi bir medya aracı için olan
                reklamları içeren reklam amaçlı tüm potansiyel kullanımına izin
                veriyorsunuz. Ek olarak Alıcıbul’un meşru menfaatleri ve anonim
                istatistik verileri tutabilmesi için Aracınızı ilandan
                kaldırmanız halinde bununla ilgili alışveriş verinizi almamıza
                izin veriyorsunuz. Bu bilgilerin kaydedilmesi ve yayınlanması
                kullanıcı tarafından istenilen zamanda mobil cihazı üzerinden
                gizlilik ayarları kısmından iptal edilebilir fakat bu Alıcıbul
                tarafından sunulan Uygulamanın ve Hizmetlerin bir KULLANICISI
                olma olanağını etkileyebilir.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                3.3. Eğer uygulamamızı indirdiysen, cihazından telefon modeli,
                işletim sistemi, sürüm, yazılım, dosya isimleri ve sürümleri,
                tercih edilen dil, cihaz kimliği (UDI), reklam kimliği, seri
                numarası, cihaz hareket bilgisi ve operatör bilgisi gibi
                bilgileri toplayabiliriz.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                4. Üyelik ve Kayıt
              </Text>
              <Text style={styles.normalTextFirstPara}>
                4.1. Uygulamayı kullanmak için e-posta adresinizi veya telefon
                numaranızı belirterek kayıt yapmanız gereklidir.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                4.2. Sizden isim ve soy isim, e-posta adresi gibi bilgileri
                Uygulama ve internet üzerinde erişilebilir olması amacıyla
                isteyeceğiz. Kayıt olmadan tüm içerik ve özelliklere erişim
                sağlayamayabilirsiniz.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                4.3 Bize sağlamış olduğunuz bilgilerin doğru ve güncel olduğunu,
                sizin kimliğinize karşılık geldiğini ve bunu yayınlamaya
                hakkınızın olduğunu garanti etmiş oluyorsunuz. Uygulamadaki
                formlarda talep edilen tüm verilerden isteğe bağlı olarak
                gözükmeyenler, Alıcıbul ile etkin bir ilişki yürütmek amacıyla
                zorunludur.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                5. Halkla İlişkiler
              </Text>
              <Text style={styles.normalTextFirstPara}>
                5.1. Tüm kişisel verilerinizin, resimlerin, kayıtların ve
                Alıcıbul’un gerçekleştirmiş olduğu hesabınızdaki bilgilerin
                yayınlanabileceğini ve diğer kullanıcıların erişebileceğini
                açıkça kabul ediyorsunuz.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                5.2. Ürünlerinizi yayınlamak gibi bazı Hizmetlere katıldığınızda
                kullanıcı adınız ve fotoğrafınızın genel halka açık internette
                erişilebilir olacağını lütfen unutmayın, dolayısıyla Hizmetleri
                kullanırken dikkatli olmalısınız. Sizin tarafınızdan ifşa edilen
                kişisel bilgiler, bu tür Hizmetlerin diğer kullanıcıları
                tarafından toplanabilir ve istenmeyen mesajlara yol açabilir.
                Hizmetlerimiz aracılığı ile üçüncü taraflara ifşa etmiş
                olduğunuz bilgileri korumak, bizim sorumluluğumuzda değildir
                (örn: telefon numaranızı Hizmetler aracılığıyla başka
                kullanıcıya göndermek). Hizmetlerimizde diğer kullanıcıların
                erişimine uygun bir profil kullandığınız için, bunun içeriğiyle
                ve doğruluğuyla alakalı yegâne sorumlu daima sizsiniz. Bu tür
                bilgileri düzenlemek, değiştirmek veya silmek için
                Hizmetlerimizde sağlanmış olan talimatları izleyin.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                6. SMS/ E-posta Haber Bülteni
              </Text>
              <Text style={styles.normalTextFirstPara}>
                Gizlilik politikamızı kabul ederek ve kayıt anında katılım
                rızası göstererek, Alıcıbul’a, sizinle iletişime geçmesi, sms
                marifeti ve/veya elektronik iletişim de dahil olmak üzere her
                türlü ticari iletişimi göndermesi, Alıcıbul’un takdirine göre
                ilginizi çekebilecek ürünlerimizin, hizmetlerimizin,
                tekliflerimizin veya şirketle ilgili herhangi bir ticari
                içeriğin gönderilmesi konusunda açık rıza gösteriyorsunuz. Eğer
                ticari iletişim içerikleri almak istemiyorsanız, bu türdeki her
                iletişim içeriğinde sağlanmış olan abonelikten ayrılma
                talimatlarını takip ederek herhangi herhangi bir zamanda
                ayrılabilirsiniz. Üçüncü taraf sosyal ağlar da dahil herhangi
                bir aracı tarafından gönderilen ticari iletişimlerden ayrılmak
                için, herhangi bir zamanda web sitesi/uygulamaya giriş yaparak
                ve ilgili kutucukların işaretini kaldırıp hesabınızdaki
                kullanıcı tercihlerini düzenleyerek abonelikten
                ayrılabilirsiniz. Ticari iletişim içeriklerini almaktan
                ayrılsanız dahi, Alıcıbul’dan işlem onayları, hesap
                faaliyetlerinizle ilgili bildirimler (örn: hesap onayları, şifre
                değişiklikleri, vb.) ve diğer önemli duyurular gibi yönetim
                mesajları alabilirsiniz.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                7. Hangi kişisel olmayan bilgileri sizden topluyoruz
              </Text>
              <Text style={styles.normalTextFirstPara}>
                7.1. Birçok durumda Alıcıbul Hizmetleri kullanımınıza dair
                otomatik olarak kişisel olmayan bilgileri toplamaktadır.
                Alıcıbul, diğer şeylerin yanında kullandığınız işletim sistemi,
                İnternet servis sağlayıcınızın alan adı ve Siteler veya Uygulama
                aracılığıyla yaptığınız “tıklama izi” gibi bilgileri
                toplayabilir.
              </Text>
              <Text style={styles.normalTextFirstPara}>
                7.2. Bunu yapmak için Alıcıbul çerezler ve diğer teknolojileri
                kullanabilir. Daha fazla bilgi için Çerez politikasına bakın.
                Hizmetlerimize yaptığınız ziyaretler ve bu teknolojilere
                sağlanan bilgiler, bize kişisel bilgilerinizi sağlayana veya
                geçmişte sağlamış olana kadar anonim kalacaktır. Örneğin
                Hizmetlerimiz ile bir hesap açtıysanız hesap bilginiz sattığınız
                veya satın aldığınız ögeler ile bağlantılanabilir (yani
                alışveriş geçmişiniz).
              </Text>
              <Text style={styles.normalTextSecondPara}>
                8. Çerezler ve ilgili teknoloji hakkında bilgi
              </Text>
              <Text style={styles.normalTextFirstPara}>
                8.1. Alıcıbul Hizmetleri “çerezler” içerebilir.
                Kullanıcılarımızın oturumlarını yönetmek ve tercihlerini, takip
                bilgilerini ve dil seçimlerini saklamak için çerezler
                kullanabiliriz. Çerezler bize kayıt olsanız da, olmasanız da
                kullanılabilir. “Çerezler” bir web sunucusu tarafından sabit
                diskinize taşınan ve ardından bilgisayarınızda saklanan ufak
                metin dosyalarıdır. Bir çerezin topladığı bilgi türleri; ziyaret
                tarih ve saatiniz, gezinme geçmişiniz, tercihleriniz ve
                kullanıcı adınızı içermektedir. Bazı durumlarda üçüncü taraf
                servis sağlayıcılarımız Web Sitesi üzerinde çerezler
                kullanabilir. Üçüncü taraf hizmet sağlayıcılarının çerezlerini
                kontrol edemeyiz veya erişemeyiz. Bu Gizlilik Politikası sadece
                bizim kullandığımız Çerezleri kapsamakta, hiçbir üçüncü taraf
                hizmet sağlayıcısının çerezini kapsamamaktadır. Bu çerezlerin
                bilgisayarınızda kullanımını kabul etme veya reddetme imkanına
                sahipsiniz. Bunu bize kayıt olurken veya çerez kullanımı ile
                ilgili web sitesi açılır penceresinde tamam’ı
                tıklayarak gerçekleştirebilirsiniz. Genel anlamda tarayıcınızı,
                çerezleri kabul etmemesi şeklinde ayarlayabilirsiniz. Fakat
                çerez kullanımını reddetmek Web Sitesinin belirli özelliklerinin
                kullanımını sınırlandırabilir.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(327),
    marginTop: hp(15),
    marginBottom: hp(10),
    alignItems: 'center',
  },
  mainrect: {
    width: wp(327),
    height: hp(685),
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 14,
  },
  txtRect: {
    width: wp(327),
    paddingHorizontal: 25,
    paddingTop: hp(25),
    paddingBottom: hp(45),
  },
  normalTextFirstPara: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    lineHeight: 20.49,
    marginTop: hp(20),
    color: '#3A2D13',
  },
  normalTextSecondPara: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    marginTop: hp(20),
    fontWeight: 'bold',
    lineHeight: 20.49,
    color: '#3A2D13',
  },
  boldText: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    color: '#3A2D13',
  },
});

export default TermsAndConditionContentComponent;
