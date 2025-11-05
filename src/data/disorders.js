const disorders = [
    {
        id: "depression",
        name: "Depresyon (Majör Depresif Bozukluk)",
        category: "Duygu Durumu Bozuklukları",
        short:
            "Uzun süreli düşük ruh hali, ilgi kaybı, enerji azalması ve günlük işlevsellikte düşüş.",
        description:
            "Depresyon; kişinin duygu durumunu, düşüncelerini ve davranışlarını etkileyen yaygın bir ruhsal bozukluktur. Genellikle yaşamdan zevk alamama, umutsuzluk, değersizlik hissi ve fiziksel yorgunluk belirtileriyle kendini gösterir. Hem genetik hem çevresel faktörler depresyonun gelişiminde rol oynar.",
        symptoms: [
            "Sürekli üzgün veya boşlukta hissetme",
            "İlgi veya zevk kaybı (anhedoni)",
            "Enerji azlığı, yorgunluk",
            "Uyku bozuklukları (aşırı uyuma ya da uykusuzluk)",
            "Konsantrasyon güçlüğü",
            "Kendine güvensizlik, suçluluk hissi",
            "İştah değişiklikleri"
        ],
        treatment:
            "Psikoterapi (özellikle Bilişsel Davranışçı Terapi), ilaç tedavisi, sosyal destek ve yaşam tarzı düzenlemeleri genellikle birlikte uygulanır.",
        tips:
            "Düzenli uyku, açık havada yürüyüşler ve sosyal etkileşimler depresyonun etkilerini hafifletebilir.",
        caution:
            "Bu bilgi bilgilendirme amaçlıdır. Teşhis ve tedavi için ruh sağlığı profesyoneline başvurun."
    },
    {
        id: "anxiety",
        name: "Anksiyete Bozuklukları",
        category: "Anksiyete ve Stres Bozuklukları",
        short:
            "Aşırı endişe, panik ataklar veya günlük yaşamı etkileyen sürekli gerginlik.",
        description:
            "Anksiyete, tehdit algısına karşı verilen doğal bir tepkidir; ancak bu duygu sürekli hale geldiğinde, bireyin günlük işlevselliğini olumsuz etkileyebilir. Farklı türleri arasında yaygın anksiyete bozukluğu, panik bozukluk, sosyal fobi ve özgül fobiler yer alır.",
        symptoms: [
            "Sürekli endişe veya huzursuzluk hissi",
            "Panik ataklar (çarpıntı, nefes darlığı, terleme)",
            "Kas gerginliği ve mide rahatsızlıkları",
            "Uykuya dalma güçlüğü",
            "Konsantrasyon bozukluğu"
        ],
        treatment:
            "Bilişsel davranışçı terapi (CBT), gevşeme teknikleri, nefes egzersizleri ve gerekirse ilaç tedavisi uygulanabilir.",
        tips:
            "Meditasyon, düzenli egzersiz ve nefes kontrolü teknikleri anksiyeteyi yönetmeye yardımcı olur."
    },
    {
        id: "ocd",
        name: "Obsesif-Kompulsif Bozukluk (OKB)",
        category: "Obsesif-Kompulsif ve İlişkili Bozukluklar",
        short:
            "Tekrarlayan takıntılar ve bu takıntıları azaltmak için yapılan zorlayıcı davranışlar.",
        description:
            "OKB, bireyin kontrol edemediği istenmeyen düşünceler (obsesyonlar) ve bu düşünceleri azaltmak için yaptığı tekrar eden davranışlarla (kompulsiyonlar) karakterizedir. Bu döngü, kişide ciddi stres ve zaman kaybına yol açabilir.",
        symptoms: [
            "Aşırı temizlik veya kontrol etme davranışları",
            "Sayma veya belirli kalıpları tekrarlama ihtiyacı",
            "İstenmeyen, rahatsız edici düşünceler",
            "Davranışları yapmazsa kötü bir şey olacağına inanma"
        ],
        treatment:
            "Maruz bırakma ve tepki önleme terapisi (ERP) ve bilişsel terapiler en etkili yöntemler arasındadır. İlaç tedavisi (SSRI) da destekleyici olabilir.",
        tips:
            "Ritüelleri kademeli olarak azaltma egzersizleri OKB'nin kontrolünü güçlendirir."
    },
    {
        id: "bipolar",
        name: "Bipolar Bozukluk",
        category: "Duygu Durumu Bozuklukları",
        short:
            "Manik (yüksek enerji) ve depresif dönemlerin birbirini takip ettiği bir durum.",
        description:
            "Bipolar bozukluk, kişinin duygudurumunda uç değişimlerle seyreden bir hastalıktır. Manik dönemlerde enerji artışı, özgüvende aşırı yükselme, az uyuma; depresif dönemlerde ise isteksizlik, umutsuzluk ve yorgunluk gözlenir.",
        symptoms: [
            "Manik dönem: Aşırı enerji, hızlı konuşma, dürtüsel kararlar",
            "Depresif dönem: Enerji kaybı, umutsuzluk, ilgi kaybı",
            "Düşünce ve davranışlarda uç değişimler",
            "Uyku ve iştah düzensizlikleri"
        ],
        treatment:
            "Duygudurum dengeleyiciler (ör. lityum), psikoterapi ve düzenli hekim takibi ile yönetilir.",
        tips:
            "Düzenli uyku, ilaçların aksatılmaması ve stresin azaltılması manik/depresif atakların sıklığını azaltır."
    },
    {
        id: "schizophrenia",
        name: "Şizofreni",
        category: "Psikotik Bozukluklar",
        short:
            "Gerçeklikten kopma, halüsinasyonlar ve düşünce bozuklukları ile seyreden ciddi bir rahatsızlık.",
        description:
            "Şizofreni, kişinin gerçeklikle bağını koparan kronik bir ruhsal bozukluktur. Düşüncelerde dağınıklık, işitsel halüsinasyonlar ve sosyal izolasyon sık görülür. Erken tanı ve sürekli destek tedavide çok önemlidir.",
        symptoms: [
            "Halüsinasyonlar (özellikle ses duyma)",
            "Hezeyanlar (gerçek dışı inançlar)",
            "Düşünce karışıklığı ve konuşma bozukluğu",
            "Motivasyon kaybı ve sosyal çekilme"
        ],
        treatment:
            "Antipsikotik ilaçlar, aile terapisi, psikososyal rehabilitasyon ve destekleyici terapi kombinasyonu kullanılır.",
        tips:
            "Tedaviye düzenli devam etmek ve sosyal destek almak iyileşmeyi güçlendirir.",
        caution:
            "Şizofreni uzun süreli uzman desteği gerektirir. Tedaviyi bırakmak belirtilerin alevlenmesine yol açabilir."
    },
    {
        id: "psychosis",
        name: "Psikotik Bozukluk",
        category: "Psikotik Bozukluklar",
        short:
            "Gerçekle bağın koptuğu, halüsinasyonlar veya sanrılarla seyreden bir durum.",
        description:
            "Psikotik bozukluklarda kişi, gerçek ile hayal arasındaki farkı ayırt etmekte zorlanır. Genellikle halüsinasyonlar (olmayan şeyleri görmek/duymak) ve sanrılar görülür. Stres, travma veya madde kullanımı psikotik atakları tetikleyebilir.",
        symptoms: [
            "Gerçek dışı algılar (ör. ses duyma, görüntü görme)",
            "Tutarsız veya dağınık konuşma",
            "Davranışlarda ani değişimler",
            "Kendine veya başkalarına yönelik şüphecilik"
        ],
        treatment:
            "Antipsikotik tedaviler, terapi ve destekleyici psikososyal yaklaşımlar önerilir.",
        tips:
            "Stresin azaltılması ve ilaç tedavisinin aksatılmaması psikotik atakların kontrolüne yardımcı olur."
    },
    {
        id: "ptsd",
        name: "Travma Sonrası Stres Bozukluğu (TSSB)",
        category: "Travma ve Stresle İlişkili Bozukluklar",
        short:
            "Travmatik olaylardan sonra tekrarlayan anılar, kabuslar ve aşırı uyarılma hali ile giden bozukluk.",
        description:
            "TSSB, bireyin ağır bir travmatik olay (ör. kaza, saldırı, savaş, kayıp) yaşadıktan sonra duygusal ve fizyolojik olarak bu olayı tekrar tekrar yaşamasıyla ortaya çıkar. Kişi, olayla ilgili uyaranlardan kaçınabilir ve sürekli tetikte olabilir.",
        symptoms: [
            "Travmatik olayın sık sık hatırlanması (flashback)",
            "Kabuslar ve uyku bozuklukları",
            "Aşırı irkilme, öfke patlamaları",
            "Sosyal izolasyon ve kaçınma davranışları"
        ],
        treatment:
            "Travma odaklı terapiler (ör. EMDR, CBT), grup terapisi ve gerektiğinde ilaç desteği etkili olabilir.",
        tips:
            "Güvenli bir ortamda travma hakkında konuşmak ve destek gruplarına katılmak iyileşmeyi kolaylaştırır."
    }
];

export default disorders;
