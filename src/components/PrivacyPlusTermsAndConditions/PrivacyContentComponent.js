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

const PrivacyContentComponent = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainrect}>
          <ScrollView>
            <View style={styles.txtRect}>
              <Text style={styles.normalTextFirstPara}>
                Bu Sözleşme, <Text style={styles.boldText}>"Alıcıbul"</Text>{' '}
                mobil uygulamasına ve ayrıca{' '}
                <Text style={styles.boldText}>"www.alicibul.com"</Text> internet
                sitesine ulaşımınız veya bunları kullanımınız ile ilgili olarak
                sizin ve ALICIBUL Otomotiv Ve Bilgisayar Yazılım Teknolojileri
                Danışmanlık Pazarlama Sanayi Ticaret Limited Şirketi
                arasındadır.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                ALICIBUL Otomotiv Ve Bilgisayar Yazılım Teknolojileri
                Danışmanlık Paz. San. Tic. Ltd. Şti. işbu Sözleşmede{' '}
                <Text style={styles.boldText}>"Şirket"</Text>
                veya <Text style={styles.boldText}>"biz"</Text> veya "bize"
                olarak anılacaktır. Alıcıbul mobil uygulaması, tüm halef
                uygulama(lar) ile birlikte{' '}
                <Text style={styles.boldText}>“Uygulama”</Text> olarak
                anılacaktır ve şu anda www.alicibul.com adresinde bulunan
                internet sitesi tüm halef internet sitesi ile birlikte “Site”
                olarak anılacaktır. Son olarak Sözleşmede, Uygulama ve Site,
                içinde mevcut olan tüm ürün ve hizmetler ile birlikte{' '}
                <Text style={styles.boldText}>"Hizmet"</Text>
                olarak ifade edilmektedir. Bu Sözleşme'nin, iş bu vesile ile
                bizim tarafımızdan Hizmet aracılığıyla bildirilen veya herhangi
                başka şekilde tarafınıza sağlanan ilave hüküm ve koşulları da
                atıf yoluyla içerdiğini unutmayın.
              </Text>
              <Text style={styles.normalTextSecondPara}>
                HİZMETİ KULLANARAK,
              </Text>
              <Text style={styles.normalTextSecondPara}>
                (1) BU SÖZLEŞME'Yİ AKDETMEK İÇİN İKAMET ETTİĞİNİZ ÜLKEDEKİ YASAL
                YAŞTA OLDUĞUNUZU (Kİ BİRÇOK ÜLKEDE BU 18'DİR) VEYA (2) EN AZ 15
                YAŞINDA OLDUĞUNUZU VE İŞBU SÖZLEŞMEYİ AKDETMEK İÇİN VELİ VEYA
                VASİ İZNİNİ ALDIĞINIZI VE VELİ VEYA VASİNİZİN EYLEM VE
                İHMALLERİNİZDEN DOLAYI SORUMLU OLMAYI KABUL ETTİĞİNİ DOĞRULAMIŞ
                OLUYORSUNUZ. 1.Ürün İlanları ve diğer Sunumlar da (aşağıda
                tanımlandığı üzere) dahil olmak üzere Hizmetle ilişkili olarak
                sunduğunuz bilgilerin doğru ve eksiksiz olduğunu ve doğru
                kalacağını ve bu tür bilgileri gerektiği şekilde doğru şekilde
                saklayacağınızı ve güncelleyeceğinizi beyan ve tekeffül
                edersiniz. 2. Kayıt; Kullanıcı Adları ve Parolalar: Hizmetin
                tümünü veya bir kısmını kullanabilmek için kayıt yaptırmanız
                gerekebilir. Kayıt sırasında bize vermiş olduğunuz kullanıcı
                adı, şifre veya diğer bilgileri reddedebilir veya değiştirmenizi
                talep edebiliriz. Kullanıcı adınız ve şifreniz hesabınızın
                bilgileridir ve gizli tutulmalıdır. Hesap bilgilerinizi
                kullanarak kaydettiğiniz tüm hesaplardaki tüm faaliyetlerden
                sorumlusunuzdur. Hesap bilgilerinizin gizliliğinin ihlal
                edildiğine inanıyorsanız bize derhal bildirimde bulunmalısınız.
                Eğer bir sosyal medya ağı kullanarak kaydolursanız, bizi kayıt
                işlemleriniz ile bağlantılı olan sosyal medya ağından
                edindiğimiz bilgilerinize Gizlilik Politikamız uygun olarak
                erişmeye, kullanmaya, ifşa etmeye ve saklamaya dair
                yetkilendirmiş olursunuz. 3. Ürün İlanları: Hizmet,
                kullanıcıların vasıtalar ve hizmetler için ilan ("Ürün
                İlanları") koyabilecekleri ve bunlara göz atabilecekleri bir
                forum içermektedir. BU ÜRÜN İLANLARI TARAFIMIZDAN DEĞİL,
                KULLANICILAR TARAFINDAN SAĞLANMAKTADIR. HERHANGİ BİR ÜRÜN,
                GAYRİMENKUL VEYA HİZMET SATMAMAKTA, KİRALAMAMAKTA VEYA DİĞER BİR
                ŞEKİLDE MEVCUT KILMAMAKTAYIZ. SÖZ KONUSU İLANLAR, (İŞBU
                SÖZLEŞMEDE YER HÜKÜMLER DIŞINDA) ÜRÜN İLANLARI İÇİN SORUMLU VEYA
                MESUL DEĞİLİZ VEYA SÖZ KONUSU ÜRÜN İLANLARI ŞİRKET TARAFINDAN
                HERHANGİ BİR TEKLİF TEŞKİL ETMEMEKTEDİR. LÜTFEN BİR ÜRÜN İLANI
                SATIN ALIRKEN, SATARKEN, KİRALARKEN VEYA KİRAYA VERİRKEN VEYA
                BAŞKA BİR ŞEKİLDE HERHANGİ BİR ÜRÜN İLANINA İLİŞKİN İŞLEME
                İŞTİRAK EDERKEN VEYA ÜRÜN İÇİN ÖDEME YAPARKEN VEYA ALIRKEN
                DİKKATLİ VE SAĞDUYULU DAVRANINIZ. Herhangi bir Ürün İlanının
                Hizmet aracılığıyla mevcut olması veya reklamının yapılması Ürün
                İlanına veya bunun sağlayıcısına onay verdiğimiz anlamına
                gelmeyecektir. Herhangi bir Ürün İlanına veya kullanıcıya
                ilişkin herhangi bir garantimiz bulunmamaktadır. Herhangi bir
                Ürün İlanına veya Ürün İlanının mevcudiyetine ilişkin bilgiler
                önceden bildirilmeksizin her an değiştirilebilmektedir. Ürün
                İlanlarının konusunun pazarlanması, tanıtımı, satışı, satın
                alınması, teslimatı, teslim alınması, elde bulundurulması ve
                kullanılması ile ilgili yürürlükte bulunan kanunları öğrenmeli
                ve bunlara riayet etmelisiniz. Herhangi bir nedenle herhangi bir
                Ürün İlanını kaldırma hakkımız her zaman saklıdır. Ürün İlanı
                yayınlamak ve herhangi bir Ürün İlanı ile ilgili herhangi bir
                işlem yapmak veya herhangi bir devir gerçekleştirmek için
                gerekli tüm yetki ve izinlere sahip olduğunuzu ve eğer bu
                işlemleri yapmak için yasal olarak kabul edilen yaşta değil
                iseniz, uygun veli veya vasinin rızası ile gereken yetki ve
                izinleri sahip olduğunuzu beyan edersiniz. Birçok ülkede yasal
                yaş 18 olarak kabul edilmektedir. 4. Sunumlar: Sizi kişisel
                olarak tanımlamak için kullanılabilecek bilgileri Ürün İlanları,
                profil sayfalarının yaratılması, forumlara sunum yapma, sosyal
                medya aracılığıyla bağlanma, mesaj panoları, sohbet, yorum yapma
                ve Hizmetin diğer interaktif kanalları aracılığıyla
                sunabilirsiniz (her biri “Sunum”). Her bir yaptığınız Sunumdan
                sorumlusunuz. Sunumların herhangi bir üçüncü kişi tarafından
                kullanımı veya kötüye kullanımı (dağıtılması da dahil) üzerinde
                hiçbir şekilde kontrol sahibi olmadığımız gibi sorumlu da
                değiliz. Buna ek olarak, bize Hizmete ilişkin veya başka bir
                şekilde bir fikir, öneri, teklif veya başka bir malzeme ("Geri
                Bildirim") sağlarsanız söz konusu Geri Bildirim, Sunum olarak
                kabul edilecektir ve işbu vesile ile söz konusu Geri Bildirimin
                gizli olmadığını ve söz konusu Geri Bildirim'i bize sunmanız
                bedelsiz, talep olmaksınız verilmiş ve herhangi bir sınırlı
                olmaksızın yapılmış olduğunu, bizim üzerimizde herhangi bir
                yükümlülük yaratmadığını kabul ve beyan etmektesiniz. 5.
                Gözetim: Gönderilerinizi, Hizmette görünmeden önce veya sonra
                (böyle bir zorunluluğumuz olmasa dahi) (doğrudan veya bir
                yazılım kullanarak) denetleyebilir, değerlendirebilir,
                değiştirebilir veya kaldırabiliriz ya da Hizmete erişiminizi ve
                kullanımınızı değerlendirebiliriz. Gizlilik Politikamıza tabi
                olarak, Hizmet'e erişiminiz ve Hizmet’i kullanımınız ile ilgili
                bilgileri herhangi bir kişiye herhangi bir neden veya amaçla
                açıklayabileceğimizi kabul etmektesiniz. 6. Öne Çıkan Ürün
                İlanları ve Sunumlar. Hizmetler ile bağlantılı olarak ücret
                karşılığı (“Ücretler”) belirli gelişmiş özellikler (örneğin Ürün
                İlanınızın yayında “öne çıkarılması”) sunabiliriz (“Ücretli
                Hizmetler”). Tüm Ücretler Uygulamada veya Sitede belirtilmiş
                veya açıklanmıştır ve Türk Lirası olarak belirlenmiştir ve
                yürürlükteki vergileri içermemektedir. Ödemeler Uygulamayı
                orijinal olarak indirdiğiniz Google Play veya iTunes uygulama
                mağazası veya birlikte çalıştığımız lisanslı ödeme sistemi
                şirketleri aracılığıyla tahsil edilecektir. Uygulama
                mağazalarından doğrudan yürürlükteki “uygulama içi” satın alım
                kurallarına ve politikalarına ulaşabilirsiniz. Tüm faturalama ve
                geri ödeme soruları uygun uygulama mağazasına yöneltilmelidir.
                Ücretli Hizmetlerin teslimatı satın alımı takiben derhal
                sağlanacaktır. Ücretleri zaman zaman tamamen kendi takdirimizde
                olmak üzere değiştirme hakkını saklı tutuyoruz. Ücretlerdeki
                herhangi bir değişiklik bir sonraki faturalama dönemine
                uygulanacaktır. Yukarıda belirtilenler, veya tarafımızca açıkça
                aksinin kabul edilmiş olması haricinde, Ücretli Hizmetlerin
                bütün satışları (herhangi bir Abonelik Hizmeti de dahil)
                kesindir ve iade yapılmayacaktır. Kısmen kullanılmış Abonelik
                Hizmetleri dönemleri için iade yapılmayacak veya kredi
                verilmeyecektir. Buna ek olarak, işbu Sözleşmeye uymanız
                koşuluyla ve Şirketin Siteyi kullanmanıza izin verdiği süre
                boyunca işbu Sözleşme kapsamında Sitede size erişimini
                sağladığımız herhangi bir bölümün tek bir (1) kopyasını,
                herhangi bir cihazda ticari olmayan kişisel kullanımınız için
                görüntüleyebilirsiniz. 7. Şirketin Mülkiyet Hakları: Mülkiyet
                hakları ile ve kanunlarla korunan Hizmete sahibizdir. Ticari
                ünvanlarımız, ticari markalarımız ve hizmet markalarımız
                Alıcıbul ve ilişkili her bir logoyu içermektedir. Hizmette bize
                ait olmayan tüm ticari unvanlar, ticari markalar, hizmet
                markaları ve logolar ilgili sahiplerinin mülkiyetindedir. Ticari
                unvanlarımızı, ticari markalarımızı, hizmet markalarımızı veya
                logolarımızı, bize ait olmayan herhangi bir ürün veya hizmetle
                bağlantılı olarak veya karışıklığa yol açabilecek bir şekilde
                kullanamazsınız. Hizmette yer alan hiçbir şey, sahibinin açık
                yazılı izni olmaksızın ticari ünvan, ticari marka, hizmet
                markası veya logoyu kullanma hakkı verdiği şekilde
                yorumlanmamalıdır. 8. Tazminat: Uygulanabilir yasaların izin
                verdiği en geniş ölçüde; Şirketi, Bağlı Ortaklıklarını, ayrı
                ayrı her birinin haleflerini ve devralanlarını, (a) Hizmeti
                kullanımınız veya Hizmet ile bağlantılı olarak faaliyetleriniz
                (Sunumlar dahil); (b) Ürün İlanları, Ürün İlanlarına ilişkin
                işlemler veya devir veya Hizmetin diğer kullanıcıları ile
                aranızdaki uyuşmazlıklar; ve (c) bu Sözleşmenin sizin
                tarafınızdan ihlali veya iddia edilen ihlalinden doğan veya
                bunlarla bağlantılı tüm iddialar, sorumluluklar, zararlar,
                hükümler, kararlar, kayıplar, maliyetler, giderler ve ödemeler
                (avukatlık ücreti dahil) karşında savunmayı, tazmin etmeyi ve
                zarardan beri kılmayı kabul etmektesiniz. 9. Fesih: Bu Sözleşme
                feshedilene kadar geçerlidir. Şirket her zaman, önceden uyarıda
                bulunmaksızın, herhangi bir nedenle veya sebepsiz olarak Hizmeti
                kullanmanıza son verebilir veya askıya alabilir. Böyle bir fesih
                veya askıya alma işlemi sonrasında Hizmeti kullanma hakkınız
                derhal sona erecektir, ve Şirket Hizmete erişiminizi bloke etmek
                için teknik ve/veya diğer önlemler alabilir. 10. Uygulanacak
                Hukuk: Bu Sözleşmenin hükümleri, Türkiye yasalarına göre
                yorumlanacaktır. 11. Bilgi veya Şikayetler: Hizmetle ilgili bir
                sorunuz veya şikâyetiniz varsa lütfen developers@alicibul.com
                adresine bir e-posta gönderiniz. E-posta iletişiminin her zaman
                güvenli olmayabileceğini lütfen unutmayınız; dolayısıyla,
                bizimle olan e-posta yazışmalarınızda kredi kartı bilgilerinizi
                veya diğer hassas bilgilerinizi eklememenizi öneriyoruz. 12.
                Değişiklikler: Revize edilmiş Sözleşmeyi, Hizmet üzerinden ilan
                etmek dahil, söz konusu değişiklikleri size makul iletişim
                araçları ile bildirim yaparak bu Sözleşmeyi zaman zaman tadil
                edebiliriz. Söz konusu değişiklikler, revize edilmiş, söz konusu
                değişiklikleri içeren Sözleşmeyi ilan etmiş olduğumuz veya başka
                şekilde söz konusu değişikliklerden sizi haberdar ettiğimiz
                tarihten önce aramızda ortaya çıkmış olan uyuşmazlıklara
                uygulanmayacaktır. Bu Sözleşmenin herhangi bir değişiklikten
                sonra Hizmet'i kullanmaya devam etmeniz, bu değişiklikleri kabul
                ettiğiniz anlamına gelecektir. Yukarıdaki "Son Güncelleme"
                ifadesi, bu Sözleşmenin en son ne zaman tadil edildiğini
                belirtir. Herhangi bir sorumluluğumuz olmadan her zaman Hizmetin
                tamamını veya bir kısmını değiştirebilir ya da durdurabiliriz;
                Hizmet'i kullanmak için gerekli ücretleri yükleyebiliriz,
                değiştirebiliriz veya kaldırabiliriz; Hizmet kullanıcılarının
                tamamına veya bir kısmına fırsatlar sunabiliriz. 13. Apple'a
                Özgü Koşullar: Sözleşmenizin yukarıdaki hüküm ve koşullarına ek
                olarak ve bu Sözleşmede aksine herhangi bir hüküm olması
                durumunda dahi aşağıdaki hükümler, Uygulamanın Apple Inc’in
                ("Apple") iOS işletim sistemi ile uyumlu herhangi bir sürümünü
                kullanmanız halinde uygulanacaktır. Apple, bu Sözleşmeye taraf
                değildir, Uygulamanın sahibi olmadığı gibi Uygulamadan sorumlu
                da değildir. Apple, Uygulama için herhangi bir garanti
                vermemektedir, ancak eğer uygulanabilir ise Uygulama için satın
                alma bedelini iade edebilir. Apple, Uygulamanın bakım ve diğer
                destek servislerinden sorumlu değildir ve, herhangi bir üçüncü
                taraf ürün sorumluluğu iddiası, Uygulamanın yasal veya idari
                zorunluluklara uygun olarak yerine getirmediği iddialar,
                tüketicinin korunması veya benzer mevzuat uyarınca doğan
                iddialar, ve fikri mülkiyet hakkı ihlallerine ilişkin iddialar
                dahil, Uygulamayla bağlantılı diğer taleplerden, kayıplardan,
                sorumluluklardan, zararlardan, masraf ya da harcamalardan
                sorumlu değildir. Fikri mülkiyet hakları ile ilgili olanlar da
                dahil, Uygulamanın kullanımıyla ilgili sorular veya şikayetler,
                Şirket'e yukarıdaki "Bilgi veya Şikayetler" bölümüne uygun
                olarak yönlendirilmelidir. Burada size verilen lisans,
                Uygulamayı Apple'ın iOS işletim sisteminde çalışan, size ait
                olan veya sizin tarafınızdan kontrol edilen Apple markalı bir
                üründe kullanmak için veya başka türlü Apple'ın Uygulama
                Mağazası Hizmet Şartları'nın içinde belirtilen Kullanım
                Kuralları tarafından ayrıca izin verildiği şekilde kullanmak
                için devredilemez bir lisansla sınırlıdır. Buna ek olarak,
                kablosuz veri hizmeti sözleşmeniz gibi Uygulamayı kullanırken
                size uygulanabilir olan herhangi bir üçüncü taraf sözleşmesinin
                hükümlerine de uymanız gerekmektedir. Apple ve Apple'ın
                iştirakleri, bu Sözleşmenin üçüncü taraf lehtarlarıdır ve bu
                Sözleşmenin hüküm ve koşullarını kabul etmeniz üzerine, işbu
                Sözleşmeyi üçüncü kişi lehtar olarak size karşı icra etme
                hakkına (bu hakkı kabul etmiş sayılacaktır) sahip olacaklardır;
                yukarıda belirtilenlerle bağlı olmaksızın, Şirket'in bu Sözleşme
                çerçevesinde herhangi bir değişikliğe, feragate veya uzlaşmaya
                taraf olma, bunları geri çekme veya feshetme hakkı, herhangi bir
                üçüncü şahsın onayına tabi değildir. 14. Tek Taraflı Üyelik
                İptali ve Güvenlik Önlemleri: Alıcıbul, üyeliğiniz boyunca
                zararlı davranışlar sergilediğinize kanaat getirir ve bu
                davranışlarınızın başta sizin daha sonra diğer kullanıcıların
                veya şirketin çıkarlarına yahut güvenliğine aykırı olarak
                nitelendirirse üyeliğinizi iptal edebilir. Mevcut teknolojik
                donanımlar çerçevesinde size ait cihazlar, ip adresleri ve
                üyelik için kullanılan iletişim adresleri tarafından uygulamaya
                girilmesini ve uygulamanın kullanılmasını engelleyebilir. Bu
                durumda cihazlarınız üzerinden uygulamaya girmeye çalışan diğer
                hesapların da otomatik sistemlerce engellenebileceğini
                belirtiriz. Bahsedilen durum gerçekleştiğinde cihazlarınız veya
                internet adresleriniz üzerinde uygulamalarımıza veya şirketimize
                ait sair iştiraklerimize ulaşmaya çalışan gerçek kişilerin
                uğrayabilecekleri zararlardan sorumlu değiliz. Silinen ve/veya
                engellenen hesaplardan kalan tüm veriler başta güvenliğin
                devamlılığı daha sonra ise istatistik tutmak gibi amaçlarla
                şirketimiz tarafından saklanacaktır. İşbu uygulamaya üye olarak
                bu şartların tamamını kabul etmiş sayılırsınız.
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
  },
  normalTextFirstPara: {
    fontSize: FontSize(15),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    lineHeight: 20.49,
    color: '#3A2D13',
  },
  normalTextSecondPara: {
    fontSize: FontSize(15),
    fontFamily: Fonts.regular,
    marginTop: hp(20),
    fontWeight: 'normal',
    lineHeight: 20.49,
    color: '#3A2D13',
  },
  boldText: {
    fontSize: FontSize(15),
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    color: '#3A2D13',
  },
});

export default PrivacyContentComponent;
