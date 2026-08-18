# FAQ PAGE

## Overview

The FAQ page provides answers to frequently asked legal questions, organized by categories. It serves as a resource for visitors to understand legal procedures and services.

**Route**: `/faq`
**Component**: `src/pages/FAQ.vue`

## Page Structure

```
src/pages/FAQ.vue
├── FaqIntro
└── FaqList
```

## Section-by-Section Analysis

---

### 1. FAQ Intro Section

**Purpose**: Introduction to the FAQ page

**Current Implementation**: `src/components/faq/FaqIntro.vue`

**Content**:
- Main heading: "الأسئلة الشائعة" (Frequently Asked Questions)
- Description paragraph

**Layout**:
- Single column
- Centered text

**New Implementation**:

```vue
<!-- components/sections/FaqIntro.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
          الأسئلة الشائعة
        </h1>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          مصدرًا شاملاً للإجابة على أكثر الأسئلة تكراراً حول القوانين والإجراءات 
          القانونية في مصر. تهدف هذه الصفحة إلى تزويدكم بمعلومات دقيقة وواضحة 
          تساعدكم في فهم حقوقكم والتزاماتكم القانونية.
        </p>
      </div>
    </Container>
  </section>
</template>
```

---

### 2. FAQ List Section

**Purpose**: Display all FAQ items in an accordion

**Current Implementation**: `src/components/faq/FaqList.vue`

**Content**:
- Section heading: "الأحوال الشخصية" (Personal Affairs)
- Accordion with 16 FAQ items

**FAQ Categories**:
The FAQ items are organized into categories:
1. **Personal Affairs (الأحوال الشخصية)**: Questions about marriage, divorce, alimony, custody
2. **Civil Cases (القضايا المدنية)**: Property, contracts, compensation
3. **Corporate Affairs (شئون الشركات)**: Company establishment, partnerships, legal matters

**Layout**:
- Single column
- Accordion with left-aligned icons

**New Implementation**:

```vue
<!-- components/sections/FaqList.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto">
        <!-- Category heading -->
        <h2 class="text-2xl md:text-3xl font-semibold text-ink mb-8">
          الأحوال الشخصية
        </h2>
        
        <!-- FAQ Accordion -->
        <Accordion :items="faqItems" icon-side="left" class="mb-12" />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Accordion from '../ui/Accordion.vue'
import faqItems from '../../data/faq.json'
</script>
```

---

## FAQ Accordion Component

**Purpose**: Expandable/collapsible FAQ items

**Current Implementation**: 
- `FaqAccordion.vue` - Wrapper component
- `AccordionList.vue` - List of accordion items

**New Implementation**:

### Accordion Component

```vue
<!-- components/ui/Accordion.vue -->
<template>
  <div class="w-full">
    <AccordionItem 
      v-for="(item, index) in items" 
      :key="item.id" 
      :item="item" 
      :is-open="openIndex === index" 
      :icon-side="iconSide" 
      @toggle="toggle(index)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AccordionItem from './AccordionItem.vue'

const props = defineProps({
  items: { type: Array, required: true },
  iconSide: { type: String, default: 'right' },
  allowMultiple: { type: Boolean, default: false }
})

const openIndex = ref(null)

function toggle(index) {
  if (props.allowMultiple) {
    // Toggle individual item
    openIndex.value = openIndex.value === index ? null : index
  } else {
    // Only one item open at a time
    openIndex.value = openIndex.value === index ? null : index
  }
}
</script>
```

### AccordionItem Component

```vue
<!-- components/ui/AccordionItem.vue -->
<template>
  <div class="border-b border-gray-200 last:border-b-0">
    <!-- Header -->
    <button 
      type="button" 
      class="w-full flex items-center justify-between py-4 px-0 
             text-left hover:bg-gray-50 transition-colors"
      :class="{
        'bg-gray-50': isOpen
      }"
      @click="$emit('toggle')"
      :aria-expanded="isOpen"
    >
      <!-- Icon (left or right) -->
      <span 
        v-if="iconSide === 'left'" 
        class="text-gold mr-4 flex-shrink-0"
        :class="{ 'rotate-45': isOpen }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </span>
      
      <!-- Title -->
      <span class="text-base md:text-lg font-medium text-ink flex-grow">
        {{ item.title }}
      </span>
      
      <!-- Icon (right) -->
      <span 
        v-if="iconSide === 'right'" 
        class="text-gold ml-4 flex-shrink-0"
        :class="{ 'rotate-45': isOpen }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </span>
    </button>
    
    <!-- Content -->
    <div 
      v-if="isOpen" 
      class="pb-4 px-0 overflow-hidden"
      :class="{
        'rtl': $i18n.locale === 'ar'
      }"
    >
      <p class="text-ink-light leading-relaxed">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  isOpen: { type: Boolean, default: false },
  iconSide: { type: String, default: 'right' }
})

defineEmits(['toggle'])
</script>

<style scoped>
/* RTL support for content animation */
.rtl {
  /* Adjust for RTL if needed */
}
</style>
```

---

## FAQ Data

The FAQ items are stored in `src/data/faq.json`:

```json
[
  {
    "id": "rs-1",
    "title": "هل رسائل الواتساب والمحادثات الإلكترونية يمكن استخدامها كدليل في قضايا الأسرة؟",
    "content": "نعم، يمكن الاستناد إلى رسائل الواتساب والمحادثات الإلكترونية في بعض قضايا الأسرة، بشرط أن تكون مرتبطة بموضوع النزاع ويمكن التحقق من صحتها ونسبتها إلى أطرافها. وقد تطلب المحكمة فحصًا فنيًا أو وسيلة إثبات رسمية، خاصة إذا أنكر الطرف الآخر المحادثة أو ادعى التلاعب بها. لذلك يُفضَّل الاحتفاظ بالمحادثة كاملة على الهاتف وعدم الاكتفاء بصورة شاشة منفردة أو تعديل محتواها، مع عرضها على محامٍ لتحديد الطريقة القانونية الصحيحة لتقديمها. والقيمة النهائية لهذه الرسائل تظل خاضعة لتقدير المحكمة وظروف كل قضية."
  },
  {
    "id": "rs-2",
    "title": "ماذا أفعل إذا امتنع الطرف الآخر عن تنفيذ حكم النفقة أو الرؤية؟",
    "content": "تختلف الإجراء القانوني بحسب نوع الحكم. ففي حالة الامتناع عن سداد النفقة، يمكن اتخاذ إجراءات التنفيذ لتحصيل المبالغ المستحقة، كما تجوز ملاحقة المحكوم عليه جنائيًا إذا امتنع عن الدفع رغم قدرته لمدة ثلاثة أشهر بعد التنبيه عليه قانونًا. أما عند الامتناع عن تنفيذ حكم الرؤية، فيجب إثبات حالات الامتناع واتخاذ إجراءات الإنذار القانونية، وإذا تكرر الامتناع دون عذر، يجوز للمحكمة أن تقضي بنقل الحضانة مؤقتًا إلى من يلي الحاضن في ترتيب أصحاب الحق فيها. وتُحدَّد الإجراءات المناسبة بعد مراجعة الحكم وظروف كل حالة."
  },
  {
    "id": "rs-3",
    "title": "هل يمكن المطالبة بالحقوق الزوجية بعد مرور فترة طويلة على الانفصال؟",
    "content": "نعم، قد تظل بعض الحقوق الزوجية قابلة للمطالبة بها بعد الانفصال، لكن المدة القانونية تختلف بحسب نوع الحق والمستندات المتاحة. فعلى سبيل المثال، لا تُسمع دعوى نفقة الزوجة عن مدة ماضية تزيد على سنة سابقة على تاريخ رفع الدعوى، بينما تخضع حقوق أخرى مثل مؤخر الصداق والمنقولات والتعويضات لقواعد ومدد مختلفة. لذلك يجب مراجعة تاريخ الانفصال والمستندات والأحكام السابقة لتحديد الحقوق التي ما زال من الممكن المطالبة بها والإجراء القانوني الأنسب."
  },
  {
    "id": "rs-4",
    "title": "هل التنازل عن بعض الحقوق عند الطلاق يمنع المطالبة بها لاحقًا؟",
    "content": "يتوقف ذلك على صياغة التنازل، ونوع الحق، والظروف التي تم فيها. فالتنازل الصريح والصحيح عن حق مالي محدد قد يمنع المطالبة به لاحقًا، خاصةً إذا تم إثباته في اتفاق موثق أو أمام المحكمة. أما التنازل العام أو غير الواضح، أو الصادر تحت إكراه، فقد يكون محل نزاع قانوني. ولا يمتد التنازل إلى حقوق الأبناء، مثل النفقة وغيرها من الحقوق المقررة لهم، كما لا يجوز أن يكون إسقاط حضانتهم أو حقوقهم مقابلًا للخلع. لذلك يجب مراجعة أي اتفاق قبل توقيعه للتأكد من آثاره القانونية."
  },
  {
    "id": "rs-5",
    "title": "حصلت على حكم لصالحك، لكن الطرف الآخر لا ينفذه... ما الخطوة التالية؟",
    "content": "الخطوة التالية هي البدء في إجراءات التنفيذ الجبري، بعد التأكد من أن الحكم واجب النفاذ واستخراج صورته التنفيذية. يتم إعلان المحكوم عليه بالسند التنفيذي وتكليفه بالوفاء، ثم اختيار الإجراء المناسب لطبيعة الحكم، مثل الحجز على الأموال أو الحسابات والحقوق المستحقة لدى الغير، أو اتخاذ إجراءات التسليم والإخلاء. وفي حال ظهور أي عقبات أو منازعات أثناء التنفيذ، يتم اللجوء إلى قاضي التنفيذ لاتخاذ الإجراء القانوني المناسب."
  },
  {
    "id": "rs-6",
    "title": "هل العقد غير المسجل أو المكتوب بخط اليد يحفظ الحقوق قانونًا؟",
    "content": "نعم، قد يكون العقد المكتوب بخط اليد حجة قانونية بين أطرافه متى كان واضحًا ومستوفيًا لبياناته الأساسية وموقّعًا من المتعاقدين، ما لم ينكر أحدهم صراحةً توقيعه أو يطعن على صحة المحرر. ولا تعني الكتابة بخط اليد وحدها أن العقد باطل أو عديم القيمة القانونية. لكن عدم التسجيل قد يؤثر في بعض أنواع العقود، خاصةً التصرفات العقارية؛ فعقد البيع غير المسجل قد يرتب التزامات بين البائع والمشتري، لكنه لا ينقل ملكية العقار قانونًا إلا بعد اتخاذ إجراءات التسجيل المقررة. لذلك يُنصح بمراجعة العقد قبل توقيعه والتأكد من توثيقه أو تسجيله متى كان القانون يشترط ذلك، لضمان حماية الحقوق وتجنب النزاعات مستقبلًا."
  },
  {
    "id": "rs-7",
    "title": "هل يمكن استرداد مبلغ مالي دون وجود إيصال أمانة أو عقد مكتوب؟",
    "content": "نعم، قد يمكن المطالبة بالمبلغ حتى دون وجود إيصال أو عقد، متى توافرت أدلة أخرى تثبت تسليم المال وسبب استحقاقه، مثل التحويلات البنكية، والمراسلات الإلكترونية، وإقرار المدين، أو شهادة الشهود في الحالات التي يسمح بها القانون. كما يجيز قانون الإثبات الاعتماد على الشهود عند وجود بداية دليل كتابي، أو تعذّر الحصول على مستند لمانع مادي أو أدبي، أو فقدانه بسبب خارج عن إرادة صاحبه. وتختلف قوة الإثبات بحسب ظروف الواقعة والمستندات المتاحة، لذلك يجب فحص الأدلة قبل اتخاذ الإجراء القانوني المناسب."
  },
  {
    "id": "rs-8",
    "title": "متى يتحول الخلاف العادي بين شخصين إلى قضية تستوجب التدخل القانوني؟",
    "content": "يستوجب الخلاف تدخلًا قانونيًا عندما يتجاوز حدود النقاش أو سوء التفاهم، ويترتب عليه اعتداء على حق، أو إخلال بعقد أو التزام، أو خسارة مادية، أو تهديد أو إساءة أو امتناع عن رد الأموال والممتلكات. وفي هذه الحالة يُنصح بالاحتفاظ بالمستندات والمراسلات والأدلة، وعدم اتخاذ أي إجراء متسرع، ثم عرض الوقائع على محامٍ لتحديد ما إذا كان الأنسب توجيه إنذار قانوني، أو محاولة التسوية، أو اللجوء إلى القضاء. ويختلف الإجراء الصحيح بحسب طبيعة الواقعة والأدلة المتاحة."
  },
  {
    "id": "rs-9",
    "title": "هل يمكن للشريك اتخاذ قرارات أو سحب أموال دون موافقة باقي الشركاء؟",
    "content": "لا يملك الشريك هذه الصلاحية لمجرد كونه شريكًا، بل تتحدد سلطته وفقًا للشكل القانوني للشركة، وعقد تأسيسها، ونظامها الأساسي، والصلاحيات الممنوحة للمدير أو للمفوَّض بالتوقيع. وقد تكون بعض القرارات من اختصاص المدير، بينما تتطلب قرارات أخرى موافقة الشركاء أو الجمعية المختصة. أما سحب أموال الشركة فيجب أن يكون لغرض مشروع مرتبط بنشاطها، وبمستندات وإجراءات محاسبية سليمة. وإذا تم السحب للاستخدام الشخصي أو دون صلاحية قانونية، فقد يلتزم الشريك برد المبالغ ويتعرض للمساءلة وفقًا لظروف الواقعة. لذلك يجب مراجعة عقد الشركة والسجلات المالية لتحديد الإجراء القانوني المناسب."
  },
  {
    "id": "rs-10",
    "title": "ماذا تفعل إذا توقف أحد الشركاء عن العمل وأصبح يعطل نشاط الشركة؟",
    "content": "يجب أولًا مراجعة عقد تأسيس الشركة ونظامها الأساسي لتحديد التزامات الشريك وصلاحيات الإدارة وآلية اتخاذ القرارات. ثم يتم إثبات صور التعطيل والأضرار الناتجة عنها، ودعوة الشركاء إلى اجتماع رسمي لاتخاذ القرار المناسب، مثل تقييد صلاحياته أو تغيير الإدارة أو تسوية خروجه من الشركة، وفقًا لنسب التصويت والإجراءات المحددة بالعقد والقانون. وفي الشركات ذات مسؤولية محدودة، يمكن لجماعة الشركاء النظر في تعيين المديرين أو عزلهم وفق الإجراءات القانونية المقررة. وإذا تعذر الحل الودي واستمر الضرر، يمكن اتخاذ الإجراءات القضائية اللازمة لحماية الشركة ومنع تعطّل نشاطها."
  },
  {
    "id": "rs-11",
    "title": "هل الاتفاق الشفهي بين الشركاء له قيمة قانونية عند حدوث نزاع؟",
    "content": "قد تكون للاتفاق الشفهي قيمة إذا أمكن إثباته بأدلة واضحة، مثل المراسلات أو التحويلات أو إقرار أحد الشركاء، لكنه يظل أضعف من الاتفاق المكتوب وقد يصعب إثبات تفاصيله أمام القضاء. أما القرارات التي تتعلق بحصص الشركاء أو الإدارة أو توزيع الأرباح أو تعديل عقد الشركة، فيجب توثيقها كتابةً في عقد أو ملحق أو محضر اجتماع موقع، واستكمال الإجراءات الرسمية عند الحاجة. لذلك لا يُنصح بالاعتماد على الوعود الشفهية، خاصةً إذا كانت تخالف عقد تأسيس الشركة أو نظامها الأساسي."
  },
  {
    "id": "rs-12",
    "title": "كيف تحمي شركتك من النزاعات قبل توقيع أول عقد أو بدء النشاط؟",
    "content": "تبدأ الحماية القانونية باختيار الشكل القانوني المناسب للشركة، وصياغة عقد تأسيس واضح يحدد حصص الشركاء، وصلاحيات الإدارة، وآلية توزيع الأرباح والخسائر، وكيفية اتخاذ القرارات أو خروج أحد الشركاء. كما يجب توثيق جميع الاتفاقات، ومراجعة عقود العملاء والموردين والعاملين قبل توقيعها، وتحديد المسؤوليات والجزاءات وطرق إنهاء التعاقد وتسوية النزاعات. فكلما كانت القواعد مكتوبة وواضحة منذ البداية، انخفضت فرص الخلاف وسَهُل الحفاظ على حقوق الشركة والشركاء."
  },
  {
    "id": "rs-13",
    "title": "متى تكون التسوية الودية أفضل من رفع دعوى قضائية؟",
    "content": "تكون التسوية الودية خيارًا أفضل عندما يمكن الوصول إلى اتفاق يحفظ الحقوق ويقلل الوقت والتكاليف، خاصةً في المنازعات التي تستمر فيها العلاقة بين الأطراف، مثل الشركاء أو أفراد الأسرة أو المتعاقدين. ويجب أن تكون التسوية مكتوبة بوضوح، ومحددة الالتزامات والمواعيد، وقابلة للتنفيذ قانونًا. أما إذا رفض أحد الأطراف التعاون، أو حاول إخفاء أمواله، أو كان التأخير يهدد بضياع الحق، فقد يصبح اللجوء إلى القضاء هو الإجراء الأنسب. ويُفضّل مراجعة الاتفاق قانونيًا قبل توقيعه لضمان عدم التنازل عن أي حقوق دون قصد. ويعترف النظام القانوني المصري بوسائل التوفيق والتسوية في عدد من المنازعات."
  },
  {
    "id": "rs-14",
    "title": "هل كل حكم قضائي قابل للتنفيذ فور صدوره؟",
    "content": "لا، فليس كل حكم قضائي قابلًا للتنفيذ بمجرد صدوره. يتوقف التنفيذ على درجة الحكم، وإمكانية الطعن عليه، وما إذا كان مشمولًا بالنفاذ المعجل بقوة القانون أو بقرار من المحكمة. وقد يلزم الانتظار حتى يصبح الحكم نهائيًا، ثم استخراج الصيغة التنفيذية وإعلان المحكوم عليه قبل بدء إجراءات التنفيذ. لذلك يجب مراجعة منطوق الحكم لمعرفة مدى قابليته للتنفيذ والإجراءات المطلوبة."
  },
  {
    "id": "rs-15",
    "title": "ما الأخطاء التي قد تضيع حقك رغم أن القانون في صفك؟",
    "content": "قد يضعف موقفك القانوني بسبب التأخر في اتخاذ الإجراء أو الطعن خلال الميعاد المحدد، أو عدم الاحتفاظ بالمستندات والأدلة الأصلية، أو توقيع تنازل أو مخالصة دون فهم آثارها. كما قد يتأثر الحق برفع الدعوى أمام جهة غير مختصة، أو صياغة الطلبات بصورة غير دقيقة، أو إهمال إجراءات الإعلان والمتابعة. فوجود الحق وحده لا يكفي، بل يجب إثباته والمطالبة به بالطريق القانوني الصحيح وفي المواعيد المقررة، لأن عدم مراعاة بعض مواعيد الطعن قد يؤدي إلى سقوط الحق فيه، كما تخضع الأدلة لتقدير المحكمة وفقًا لظروف الدعوى."
  },
  {
    "id": "rs-16",
    "title": "متى تحتاج إلى محامٍ قبل وقوع المشكلة وليس بعد حدوثها؟",
    "content": "تحتاج إلى استشارة محامٍ قبل توقيع العقود أو الاتفاقات، وتأسيس الشركات، والدخول في شراكة، وشراء أو بيع عقار، أو اتخاذ قرار قد يترتب عليه التزام مالي أو قانوني. فالمراجعة القانونية المسبقة تساعد على توضيح الحقوق والالتزامات، واكتشاف البنود الخطرة، وتحديد الإجراءات والتراخيص والمستندات المطلوبة قبل بدء النشاط. كما يُفضَّل الرجوع إلى محامٍ عند ظهور أول مؤشرات الخلاف، مثل التأخر في السداد أو مخالفة الاتفاق، بدلًا من الانتظار حتى تتفاقم المشكلة. فالوقاية القانونية غالبًا أكثر فاعلية وأقل تكلفة من محاولة معالجة نزاع بعد وقوعه، خصوصًا مع وجود التزامات رسمية وضريبية يجب استيفاؤها في مواعيد محددة."
  }
]
```

---

## FAQ Page Component

```vue
<!-- src/pages/FAQ.vue -->
<template>
  <div>
    <FaqIntro />
    <FaqList />
  </div>
</template>

<script setup>
import FaqIntro from '../components/sections/FaqIntro.vue'
import FaqList from '../components/sections/FaqList.vue'
</script>
```

---

## FAQ Categories Organization

For better user experience, consider organizing FAQs by category with separate sections:

```vue
<!-- Enhanced FaqList.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto space-y-12">
        <!-- Personal Affairs Category -->
        <FaqCategory 
          title="الأحوال الشخصية" 
          :items="personalAffairsFaqs" 
        />
        
        <!-- Civil Cases Category -->
        <FaqCategory 
          title="القضايا المدنية" 
          :items="civilCasesFaqs" 
        />
        
        <!-- Corporate Affairs Category -->
        <FaqCategory 
          title="شئون الشركات" 
          :items="corporateAffairsFaqs" 
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import FaqCategory from '../ui/FaqCategory.vue'

// Filter FAQs by category
const personalAffairsFaqs = faqItems.filter(faq => 
  faq.category === 'personal-affairs'
)
const civilCasesFaqs = faqItems.filter(faq => 
  faq.category === 'civil-cases'
)
const corporateAffairsFaqs = faqItems.filter(faq => 
  faq.category === 'corporate-affairs'
)
</script>
```

**FaqCategory Component**:

```vue
<!-- components/ui/FaqCategory.vue -->
<template>
  <div>
    <h2 class="text-2xl md:text-3xl font-semibold text-ink mb-6">
      {{ title }}
    </h2>
    
    <Accordion :items="items" icon-side="left" />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true }
})
</script>
```

---

## Asset Inventory for FAQ Page

No specific images are used in the FAQ page. The page relies on:
- Text content from `src/data/faq.json`
- Icon SVG for accordion (inline)

## Next Steps

Proceed to [11-contact-page.md](./11-contact-page.md) for detailed contact page specifications.
