import { useEffect, useState } from 'react';
import { CaseStudy, caseLabels } from './CaseStudy';
import { ProjectImage, projectMedia, phaseLabel } from './ProjectMedia';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

type Lang = 'en' | 'vi';
type LocalText = { en: string; vi: string };
type LocalList = { en: string[]; vi: string[] };

export type Project = {
  id: string;
  name: string;
  type: LocalText;
  role: LocalText;
  detail: LocalText;
  story: LocalText;
  handled: LocalList;
  flow: LocalText;
  outcome: LocalText;
  image?: string;
  gallery?: string[];
  externalLink?: string;
  externalLabel?: LocalText;
};

type TimelineGroup = { year: string; company: string; projects: Project[] };
type MedicalCase = {
  id: string;
  date: string;
  name: LocalText;
  format: LocalText;
  metric?: LocalText;
  image?: string;
  story: LocalText;
  handled: LocalList;
  flow: LocalText;
  link?: string;
  linkLabel?: LocalText;
};

const lt = (en: string, vi: string): LocalText => ({ en, vi });
const ll = (en: string[], vi: string[]): LocalList => ({ en, vi });

const overnightHandled = ll(
  [
    'Coordinated fast-turnaround build-up, with major construction work completed overnight before event opening.',
    'Stayed close to the Account Manager to follow priority workstreams and keep execution moving against the deadline.',
    'Supported backstage operations, guest flow and crowd routing to protect key moments during the live program.',
    'Coordinated post-event dismantling and site clearance after the event.',
  ],
  [
    'Điều phối thi công gấp, với các hạng mục chính được triển khai xuyên đêm để kịp thời điểm mở sự kiện.',
    'Phối hợp sát với Account Manager để bám các hạng mục ưu tiên và giữ tiến độ theo deadline.',
    'Hỗ trợ backstage, phân luồng khách và kiểm soát dòng di chuyển để các key moment diễn ra trọn vẹn.',
    'Điều phối tháo dỡ và hoàn trả hiện trường sau sự kiện.',
  ],
);

const timeline: TimelineGroup[] = [
  {
    year: '2020–2021', company: 'Kingsmen Vietnam', projects: [
      {
        id: 'gamuda', name: 'Gamuda Vietnam — Christmas & Tet Decoration',
        type: lt('Seasonal / Property Activation', 'Trang trí mùa lễ / Kích hoạt bất động sản'),
        role: lt('Event Coordinator', 'Điều phối sự kiện'),
        detail: lt('Contractors · Drawing-to-site execution · Client coordination · Timeline control', 'Nhà thầu · Từ bản vẽ ra thực tế · Phối hợp khách hàng · Kiểm soát tiến độ'),
        story: lt(
          'This was one of the projects that shaped my foundation in event execution. I coordinated seasonal Christmas and Tet decoration across key Gamuda / Celadon City areas, translating approved drawings into practical onsite work. When the real site did not perfectly match the drawing, I worked between the contractor and client to find a workable solution without losing the deadline.',
          'Đây là một trong những dự án tạo nền tảng cho cách tôi làm event execution. Tôi điều phối trang trí Giáng Sinh và Tết tại nhiều khu vực của Gamuda / Celadon City, chuyển yêu cầu từ bản vẽ sang thi công thực tế. Khi hiện trường không hoàn toàn giống bản vẽ, tôi phối hợp giữa nhà thầu và khách hàng để tìm phương án khả thi mà vẫn giữ deadline.'),
        handled: ll(
          ['Coordinated contractors across roundabouts, residential areas and entrance gates.','Followed technical drawings and translated them into onsite execution priorities.','Escalated and resolved site-condition issues with the client and contractor.','Tracked installation progress through completion.'],
          ['Điều phối nhà thầu tại vòng xoay, khu dân cư và cổng vào.','Bám bản vẽ kỹ thuật và chuyển thành các ưu tiên thi công tại hiện trường.','Phối hợp khách hàng và nhà thầu xử lý các khác biệt của hiện trường.','Theo dõi tiến độ lắp đặt đến khi hoàn tất.']),
        flow: lt('Drawing → Contractor → Site → Issue → Client → Solution → Deadline','Bản vẽ → Nhà thầu → Hiện trường → Phát sinh → Khách hàng → Giải pháp → Deadline'),
        outcome: lt('Built a strong foundation in translating design intent into real-world execution while coordinating multiple parties under deadline pressure.','Xây dựng nền tảng vững về việc chuyển ý tưởng thiết kế thành thi công thực tế và điều phối nhiều bên trong áp lực deadline.'),
        image: '/assets/gamuda.jpg',
      },
    ],
  },
  {
    year: '2022', company: 'Kingsmen Vietnam', projects: [
      {
        id: 'prada', name: 'Prada — Exhibition Room Setup',
        type: lt('Luxury Exhibition Setup','Thi công không gian triển lãm cao cấp'), role: lt('Event Coordinator','Điều phối sự kiện'),
        detail: lt('Detail control · Fast turnaround · Finishing quality · Onsite follow-up','Kiểm soát chi tiết · Tiến độ gấp · Chất lượng hoàn thiện · Bám onsite'),
        story: lt('Prada required a different kind of discipline: small details mattered and the working window was tight. I stayed close to the setup process, checked finishing and visual alignment, and followed contractors closely so small execution issues could be corrected quickly rather than becoming handover problems.','Prada đòi hỏi một kiểu kỷ luật khác: những chi tiết nhỏ đều quan trọng và thời gian thi công rất gấp. Tôi bám sát quá trình setup, kiểm tra độ hoàn thiện và tính chính xác của hình ảnh, đồng thời theo sát nhà thầu để xử lý ngay các lỗi nhỏ trước khi trở thành vấn đề lúc bàn giao.'),
        handled: ll(['Coordinated setup under a compressed timeline.','Checked finishing details and visual alignment throughout installation.','Worked with contractors to solve small execution issues quickly.','Tracked progress to keep the room ready on time.'],['Điều phối setup trong timeline rất gấp.','Kiểm tra kỹ độ hoàn thiện và tính chính xác trong suốt quá trình lắp đặt.','Phối hợp nhà thầu xử lý nhanh các vấn đề nhỏ tại hiện trường.','Bám tiến độ để không gian sẵn sàng đúng thời điểm.']),
        flow: lt('Detail Check → Contractor → Fast Fix → Quality Control → Ready on Time','Kiểm tra chi tiết → Nhà thầu → Xử lý nhanh → Kiểm soát chất lượng → Sẵn sàng đúng giờ'),
        outcome: lt('Strengthened my attention to finishing quality and the ability to keep detailed work moving under a short turnaround.','Rèn khả năng kiểm soát chất lượng hoàn thiện và duy trì tiến độ cho các hạng mục chi tiết trong thời gian ngắn.'), image:'/assets/prada.jpg',
      },
      {
        id:'tokyo', name:'Japan Festival — Saigon Centre', type:lt('Exhibition / Mall Activation','Triển lãm / Kích hoạt tại TTTM'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Drawing · Steel support frame · Installation · Mall coordination · Handover','Bản vẽ · Khung thép treo · Lắp đặt · Phối hợp TTTM · Bàn giao'),
        story:lt('Japan Festival turned a design package into a large facade installation and a detailed visitor setting at Saigon Centre. I followed the work from the steel support frame built to carry the suspended decoration through panel installation, lighting checks, mall inspection and final handover.','Japan Festival chuyển bộ thiết kế thành hệ mặt dựng quy mô lớn và không gian trải nghiệm nhiều chi tiết tại Saigon Centre. Tôi bám quá trình từ lúc dựng khung thép để treo hệ trang trí, lắp các mảng hoàn thiện, kiểm tra ánh sáng đến nghiệm thu với mall và bàn giao.'),
        handled:ll(['Followed drawings and the installation timeline.','Coordinated the steel support frame and decorative installation onsite.','Worked with contractors and the Saigon Centre / mall team.','Supported lighting checks, inspection and handover.'],['Bám bản vẽ và timeline lắp đặt.','Phối hợp thi công khung thép treo và hệ trang trí onsite.','Làm việc với nhà thầu và đội ngũ Saigon Centre / trung tâm thương mại.','Hỗ trợ kiểm tra ánh sáng, nghiệm thu và bàn giao.']),
        flow:lt('Drawing → Steel Support Frame → Decorative Installation → Lighting Check → Mall Inspection → Handover','Bản vẽ → Khung thép treo → Lắp hệ trang trí → Kiểm tra ánh sáng → Nghiệm thu TTTM → Bàn giao'),
        outcome:lt('Delivered a coherent installation that read clearly at facade scale and in close-up, during the day and after lighting was switched on.','Hoàn thiện một tổng thể rõ ràng từ quy mô mặt dựng đến các chi tiết cận cảnh, cả ban ngày và khi bật hệ thống ánh sáng.'), image:'/assets/tokyo.jpg',
      },
      {
        id:'decathlon', name:'Decathlon — Store Setup', type:lt('Retail Project','Dự án bán lẻ'), role:lt('Project / Event Coordinator','Điều phối dự án / sự kiện'),
        detail:lt('Contractors · Mall coordination · Site troubleshooting · Handover','Nhà thầu · Phối hợp mall · Xử lý onsite · Bàn giao'),
        story:lt('Decathlon was less about one event day and more about keeping a real site moving from an empty space toward a completed store. I coordinated contractors, worked across mall and property stakeholders, monitored the schedule and dealt with ad-hoc issues onsite. It taught me to look beyond individual tasks and keep the whole delivery sequence moving.','Decathlon không chỉ tập trung vào một ngày event mà là quá trình đưa một mặt bằng trống trở thành cửa hàng hoàn thiện. Tôi điều phối nhà thầu, phối hợp với mall và các bên liên quan đến mặt bằng, theo dõi tiến độ và xử lý các vấn đề phát sinh onsite. Dự án giúp tôi nhìn vượt ra ngoài từng đầu việc riêng lẻ và giữ toàn bộ chuỗi bàn giao luôn chuyển động.'),
        handled:ll(['Coordinated contractors and workstreams across the store setup.','Worked with mall / venue, developer-investor and property stakeholders.','Followed schedule and handled ad-hoc issues onsite.','Supported execution through completion and handover.'],['Điều phối nhà thầu và các hạng mục trong quá trình setup cửa hàng.','Phối hợp với mall / địa điểm, chủ đầu tư và các bên liên quan đến mặt bằng.','Theo dõi tiến độ và xử lý phát sinh onsite.','Theo dự án đến giai đoạn hoàn thiện và bàn giao.']),
        flow:lt('Empty Space → Contractors → Coordination → Troubleshooting → Completed Store','Mặt bằng trống → Nhà thầu → Điều phối → Xử lý phát sinh → Cửa hàng hoàn thiện'),
        outcome:lt('Expanded my coordination experience from event setup into a longer retail delivery cycle with multiple stakeholders.','Mở rộng kinh nghiệm điều phối từ setup sự kiện sang một chu kỳ triển khai retail dài hơn với nhiều bên liên quan.'), image:'/assets/decathlon.jpg', gallery:['/assets/decathlon.jpg','/assets/decathlon-build.jpg'],
      },
      {
        id:'keppel', name:'Keppel Land — Recycled Art Exhibition', type:lt('Exhibition','Triển lãm'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Setup supervision · Artwork & POSM logging · Event-day support','Giám sát setup · Kiểm kê tác phẩm & POSM · Hỗ trợ ngày sự kiện'),
        story:lt('This exhibition combined setup discipline with asset control. I supervised installation against the drawings, logged artworks and POSM, and supported the Account Manager as the project moved from setup into the live event. The work reinforced the importance of keeping both physical items and operational details organized.','Dự án triển lãm này kết hợp giữa kỷ luật thi công và kiểm soát hiện vật. Tôi giám sát lắp đặt theo bản vẽ, kiểm kê tác phẩm và POSM, đồng thời hỗ trợ Account Manager khi dự án chuyển từ setup sang vận hành sự kiện. Công việc giúp tôi hiểu rõ tầm quan trọng của việc kiểm soát cả hiện vật lẫn các chi tiết vận hành.'),
        handled:ll(['Supervised contractors setting up according to drawings.','Logged artworks and POSM items during preparation.','Supported the Account Manager during the event.','Kept setup and event-day tasks organized and on track.'],['Giám sát nhà thầu thi công theo bản vẽ.','Kiểm kê tác phẩm và POSM trong giai đoạn chuẩn bị.','Hỗ trợ Account Manager trong ngày sự kiện.','Giữ các đầu việc setup và vận hành được tổ chức và bám tiến độ.']),
        flow:lt('Drawing → Setup Supervision → Artwork/POSM Log → Event Support','Bản vẽ → Giám sát setup → Kiểm kê tác phẩm/POSM → Hỗ trợ sự kiện'),
        outcome:lt('Improved my ability to manage detailed physical assets while supporting live event operations.','Tăng khả năng kiểm soát hiện vật chi tiết đồng thời hỗ trợ vận hành live event.'), image:'/assets/keppel.jpg',
      },
    ],
  },
  {
    year:'2023', company:'Kingsmen Vietnam', projects:[
      {
        id:'forbes', name:'Forbes Business Forum', type:lt('Corporate / Business Event','Sự kiện doanh nghiệp / diễn đàn'), role:lt('Event Executive','Event Executive'),
        detail:lt('Construction supervision · Manpower · AAM support · Live operations','Giám sát thi công · Manpower · Hỗ trợ AAM · Vận hành live'),
        story:lt('Forbes Business Forum gave me a clearer view of how account, production and onsite teams connect. I supported the AAM and Manager, supervised construction items, coordinated helpers and stayed close to event operations. My value was in keeping practical tasks moving so the account team could focus on the wider client and program picture.','Forbes Business Forum giúp tôi nhìn rõ hơn cách team account, production và onsite liên kết với nhau. Tôi hỗ trợ AAM và Manager, giám sát các hạng mục thi công, điều phối helper và bám vận hành sự kiện. Vai trò của tôi là giữ các đầu việc thực tế luôn chạy để team account có thể tập trung vào bức tranh lớn hơn của khách hàng và chương trình.'),
        handled:ll(['Supported the Assistant Account Manager and Manager during preparation and live delivery.','Supervised construction of event items.','Provided, coordinated and managed helpers onsite.','Followed tasks, progress and onsite issues during the program.'],['Hỗ trợ Assistant Account Manager và Manager trong quá trình chuẩn bị và vận hành.','Giám sát thi công các hạng mục sự kiện.','Cung cấp, điều phối và quản lý helper onsite.','Theo dõi đầu việc, tiến độ và xử lý các vấn đề onsite trong chương trình.']),
        flow:lt('Build-up → Manpower → AAM Support → Live Operations → Issue Handling','Thi công → Manpower → Hỗ trợ AAM → Vận hành → Xử lý phát sinh'),
        outcome:lt('Strengthened my ability to support an account team while independently managing onsite execution details.','Tăng khả năng hỗ trợ team account đồng thời tự quản lý các chi tiết thực thi tại hiện trường.'), image:'/assets/forbes.jpg', gallery:['/assets/forbes.jpg','/assets/forbes-prep.jpg'],
      },
    ],
  },
  {
    year:'2024', company:'Kingsmen Vietnam', projects:[
      {
        id:'lumi', name:'CapitaLand — The Lumi', type:lt('Real Estate Event','Sự kiện bất động sản'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Overnight build · Backstage · Guest flow · Key moment · Dismantling','Thi công xuyên đêm · Backstage · Phân luồng khách · Key moment · Tháo dỡ'),
        story:lt('The Lumi was built around speed. Major event items had to be completed overnight, then the focus shifted immediately from construction to guest experience. I stayed alongside the Account Manager, followed priority workstreams, supported backstage and guest routing, protected the key moments during the live program, and remained through dismantling after the event.','The Lumi là dự án xoay quanh tốc độ. Các hạng mục chính phải hoàn thành xuyên đêm, sau đó trọng tâm chuyển ngay từ thi công sang trải nghiệm khách mời. Tôi phối hợp sát với Account Manager, bám các đầu việc ưu tiên, hỗ trợ backstage và phân luồng khách, đảm bảo các key moment trong chương trình và tiếp tục theo dự án đến giai đoạn tháo dỡ.'),
        handled:overnightHandled, flow:lt('Night Build → AM Coordination → Backstage & Guest Flow → Key Moment → Dismantling','Thi công đêm → Phối hợp AM → Backstage & Phân luồng khách → Key Moment → Tháo dỡ'),
        outcome:lt('Built confidence in switching quickly from high-pressure build-up into live guest-facing operations.','Tăng khả năng chuyển nhanh từ giai đoạn thi công áp lực cao sang vận hành trực tiếp với khách mời.'), image:'/assets/lumi.jpg',
      },
      {
        id:'sycamore', name:'CapitaLand — Sycamore', type:lt('Real Estate Event','Sự kiện bất động sản'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Overnight build · Backstage · Guest flow · Key moment · Dismantling','Thi công xuyên đêm · Backstage · Phân luồng khách · Key moment · Tháo dỡ'),
        story:lt('Sycamore required the same overnight discipline but with a strong live-show focus. I followed the build, stayed close to the Account Manager during show preparation, supported backstage readiness and guest movement, and kept attention on the moments where timing mattered most. The project continued through post-event dismantling rather than ending when the show finished.','Sycamore cũng yêu cầu kỷ luật thi công xuyên đêm nhưng có trọng tâm mạnh vào live show. Tôi bám quá trình thi công, phối hợp sát với Account Manager trong giai đoạn chuẩn bị chương trình, hỗ trợ backstage và luồng di chuyển của khách, đồng thời tập trung vào các thời điểm mà timing quan trọng nhất. Dự án tiếp tục đến giai đoạn tháo dỡ sau sự kiện chứ không kết thúc khi chương trình vừa xong.'),
        handled:overnightHandled, flow:lt('Night Build → Show Readiness → Backstage → Guest Flow → Key Moment → Dismantling','Thi công đêm → Sẵn sàng chương trình → Backstage → Luồng khách → Key Moment → Tháo dỡ'),
        outcome:lt('Improved my live-event awareness, especially around backstage readiness, guest routing and timing-sensitive show moments.','Cải thiện khả năng vận hành live event, đặc biệt ở backstage, phân luồng khách và các key moment nhạy về timing.'), image:'/assets/sycamore.jpg', externalLink:'https://www.facebook.com/share/v/1DYuChsSik/', externalLabel:lt('View Sycamore video','Xem video Sycamore'),
      },
      {
        id:'orchard', name:'CapitaLand — The Orchard Hill', type:lt('Real Estate Event','Sự kiện bất động sản'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Overnight build · Backstage · Guest flow · Key moment · Dismantling','Thi công xuyên đêm · Backstage · Phân luồng khách · Key moment · Tháo dỡ'),
        story:lt('The Orchard Hill combined a polished real-estate event environment with a very compressed preparation window. I supported the overnight construction phase, worked alongside the Account Manager during live preparation, handled backstage and guest flow tasks, and stayed focused on making the key program moments feel seamless from the audience side.','The Orchard Hill kết hợp một không gian sự kiện bất động sản chỉn chu với thời gian chuẩn bị rất ngắn. Tôi hỗ trợ giai đoạn thi công xuyên đêm, phối hợp với Account Manager khi chuẩn bị live event, xử lý backstage và phân luồng khách, đồng thời tập trung để các key moment diễn ra mượt mà từ góc nhìn của khách tham dự.'),
        handled:overnightHandled, flow:lt('Overnight Build → Readiness Check → Backstage → Guest Flow → Key Moment → Close-out','Thi công xuyên đêm → Kiểm tra sẵn sàng → Backstage → Luồng khách → Key Moment → Close-out'),
        outcome:lt('Strengthened my ability to coordinate fast construction and live event operations as one continuous project lifecycle.','Tăng khả năng điều phối thi công gấp và vận hành live event như một chu kỳ dự án liên tục.'), image:'/assets/orchard.jpg',
      },
      {
        id:'blum', name:'Blum — B2B Booth', type:lt('B2B Exhibition','Triển lãm B2B'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Booth setup · Contractor coordination · Schedule control · Onsite execution','Setup gian hàng · Điều phối nhà thầu · Kiểm soát tiến độ · Thực thi onsite'),
        story:lt('Blum was a compact B2B booth project where success came from keeping setup practical and controlled. I coordinated contractor work, followed the installation schedule and remained onsite through delivery so the booth could be handed over cleanly and ready for use.','Blum là một dự án gian hàng B2B gọn nhưng yêu cầu setup thực tế và kiểm soát tốt. Tôi điều phối công việc của nhà thầu, bám lịch lắp đặt và ở onsite đến lúc bàn giao để gian hàng hoàn thiện sạch sẽ và sẵn sàng vận hành.'),
        handled:ll(['Coordinated contractors and setup workstreams.','Tracked installation schedule and onsite priorities.','Supported technical and operational requirements during setup.','Stayed onsite through delivery and finishing checks.'],['Điều phối nhà thầu và các hạng mục setup.','Theo dõi lịch lắp đặt và các đầu việc ưu tiên onsite.','Hỗ trợ các yêu cầu kỹ thuật và vận hành trong quá trình setup.','Bám hiện trường đến khi bàn giao và kiểm tra hoàn thiện.']),
        flow:lt('Brief → Contractor → Setup → Onsite Check → Delivery','Brief → Nhà thầu → Setup → Kiểm tra onsite → Bàn giao'), outcome:lt('Reinforced a simple but important habit: stay close to the details until the physical delivery is actually complete.','Củng cố một thói quen đơn giản nhưng quan trọng: bám chi tiết đến khi phần bàn giao vật lý thực sự hoàn tất.'), image:'/assets/blum.jpg',
      },
    ],
  },
  {
    year:'2025', company:'KKO.vn', projects:[
      {
        id:'geso', name:'GESO — Business Forum / Booth', type:lt('Business Forum / Booth','Diễn đàn doanh nghiệp / Gian hàng'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Booth setup · Small-team coordination · Schedule tracking · Onsite execution','Setup gian hàng · Điều phối team nhỏ · Theo dõi tiến độ · Thực thi onsite'),
        story:lt('GESO was delivered with a small onsite team, so coordination needed to stay simple and direct. I followed booth setup, kept tasks aligned with the delivery timeline, supported issue handling and helped the team stay focused on the priorities that mattered most at each stage.','GESO được triển khai với team onsite nhỏ nên việc điều phối cần đơn giản và trực tiếp. Tôi bám setup gian hàng, giữ các đầu việc theo timeline bàn giao, hỗ trợ xử lý phát sinh và giúp team tập trung vào những ưu tiên quan trọng nhất ở từng giai đoạn.'),
        handled:ll(['Coordinated booth setup and onsite tasks.','Worked with a small project team to follow the delivery timeline.','Supported issue handling during setup and event operations.','Kept onsite priorities clear and aligned.'],['Điều phối setup gian hàng và các đầu việc onsite.','Phối hợp với team dự án nhỏ để bám timeline bàn giao.','Hỗ trợ xử lý phát sinh trong setup và vận hành.','Giữ các ưu tiên onsite rõ ràng và đồng bộ.']),
        flow:lt('Setup Plan → Team Coordination → Onsite Execution → Event Support','Kế hoạch setup → Điều phối team → Thực thi onsite → Hỗ trợ sự kiện'), outcome:lt('Built confidence in coordinating directly within a leaner team structure where each person carries more ownership.','Tăng sự tự tin khi điều phối trong team gọn hơn, nơi mỗi người cần chủ động và sở hữu nhiều đầu việc hơn.'),
      },
    ],
  },
  {
    year:'2026', company:'Kingsmen Vietnam · KKO.vn · Independent · Tâm Anh Research Institute', projects:[
      {
        id:'gladia', name:'Gladia Heights — Kick-off Event', type:lt('Kick-off / Real Estate','Kick-off / Bất động sản'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('Setup coordination · Timeline control · Backstage support · Onsite execution','Điều phối setup · Kiểm soát timeline · Hỗ trợ backstage · Thực thi onsite'),
        story:lt('Gladia Heights brought together the parts of event work I am most comfortable with: setup coordination, timeline control, backstage readiness and live onsite execution. I followed priority workstreams into showtime and supported quick issue handling so the program could keep moving without unnecessary disruption.','Gladia Heights tập hợp những phần việc tôi có nhiều kinh nghiệm nhất: điều phối setup, kiểm soát timeline, chuẩn bị backstage và vận hành onsite. Tôi bám các hạng mục ưu tiên đến giờ chạy chương trình và hỗ trợ xử lý nhanh phát sinh để chương trình tiếp tục vận hành ổn định.'),
        handled:ll(['Coordinated setup workstreams and contractors.','Followed the event timeline and priority tasks.','Supported backstage and onsite operations.','Helped resolve issues quickly during event delivery.'],['Điều phối các hạng mục setup và nhà thầu.','Theo dõi timeline sự kiện và các đầu việc ưu tiên.','Hỗ trợ backstage và vận hành onsite.','Hỗ trợ xử lý nhanh phát sinh trong quá trình chạy chương trình.']),
        flow:lt('Setup → Timeline Control → Backstage → Live Event → Close-out','Setup → Kiểm soát timeline → Backstage → Live event → Close-out'), outcome:lt('Showed my ability to combine setup, backstage and live event coordination in one fast-moving project.','Thể hiện khả năng kết hợp setup, backstage và vận hành live event trong một dự án có nhịp độ nhanh.'), image:'/assets/gladia.jpg',
      },
      {
        id:'panasonic', name:'Panasonic — DERGO', type:lt('B2B Exhibition','Triển lãm B2B'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('B2B booth · Vendor coordination · Setup supervision · Onsite delivery','Gian hàng B2B · Điều phối vendor · Giám sát setup · Bàn giao onsite'),
        story:lt('For Panasonic at DERGO, my focus was straightforward delivery: coordinate booth requirements, keep vendors aligned, monitor setup and solve onsite issues quickly enough to protect the handover time. The project reflects the practical execution side of my work with B2B exhibition environments.','Với Panasonic tại DERGO, trọng tâm của tôi là bàn giao thực tế: điều phối yêu cầu gian hàng, giữ vendor đồng bộ, theo dõi setup và xử lý phát sinh đủ nhanh để không ảnh hưởng thời gian bàn giao. Dự án thể hiện rõ phần thực thi thực tế trong kinh nghiệm của tôi với môi trường triển lãm B2B.'),
        handled:ll(['Coordinated booth setup requirements and vendors.','Tracked progress and onsite delivery.','Supported technical checks and issue handling during setup.','Stayed aligned with the project team through handover.'],['Điều phối yêu cầu setup gian hàng và vendor.','Theo dõi tiến độ và bàn giao onsite.','Hỗ trợ kiểm tra kỹ thuật và xử lý phát sinh trong quá trình setup.','Phối hợp với team dự án đến khi bàn giao.']),
        flow:lt('Brief → Vendor → Setup → Technical Check → Delivery','Brief → Vendor → Setup → Kiểm tra kỹ thuật → Bàn giao'), outcome:lt('Continued to strengthen vendor coordination and technical delivery in a B2B exhibition setting.','Tiếp tục củng cố khả năng điều phối vendor và bàn giao kỹ thuật trong môi trường triển lãm B2B.'), image:'/assets/panasonic.jpg',
      },
      {
        id:'mocchau', name:'Mộc Châu Creamery — Product Launch', type:lt('Product Launch / Mall Activation','Ra mắt sản phẩm / Kích hoạt tại TTTM'), role:lt('Event Coordinator','Điều phối sự kiện'),
        detail:lt('AEON Mall Tân Phú · Launch setup · Vendors · Product introduction','AEON Mall Tân Phú · Setup launch · Vendor · Giới thiệu sản phẩm'),
        story:lt('Mộc Châu Creamery shifted the environment from corporate events to a consumer-facing mall activation. I followed the launch setup, vendor coordination and onsite requirements at AEON Mall Tân Phú, then supported the product-introduction activities once the activation went live.','Mộc Châu Creamery chuyển môi trường từ corporate event sang một hoạt động trực tiếp với người tiêu dùng tại trung tâm thương mại. Tôi bám setup khu vực launch, điều phối vendor và các yêu cầu onsite tại AEON Mall Tân Phú, sau đó hỗ trợ hoạt động giới thiệu sản phẩm khi activation đi vào vận hành.'),
        handled:ll(['Coordinated launch-area setup and vendors.','Followed mall requirements and preparation timeline.','Supported product-introduction operations onsite.','Handled adjustments with the project team during activation.'],['Điều phối setup khu vực launch và vendor.','Bám yêu cầu của mall và timeline chuẩn bị.','Hỗ trợ vận hành hoạt động giới thiệu sản phẩm onsite.','Xử lý các điều chỉnh tại hiện trường cùng team dự án.']),
        flow:lt('Mall Requirements → Setup → Vendor Coordination → Launch Readiness → Product Introduction','Yêu cầu mall → Setup → Điều phối vendor → Sẵn sàng launch → Giới thiệu sản phẩm'), outcome:lt('Added consumer-facing mall activation experience to my broader event coordination background.','Bổ sung kinh nghiệm activation trực tiếp với người tiêu dùng trong môi trường trung tâm thương mại.'), image:'/assets/mocchau.jpg',
      },
      {
        id:'gintell', name:'Gintell — AEON Mall Site Reinstatement', type:lt('Independent Dismantling Project','Dự án tháo dỡ độc lập'), role:lt('Independent Project Coordinator','Điều phối dự án độc lập'),
        detail:lt('Documentation · Vendor sourcing · Mall procedure · Dismantling supervision · Site reinstatement','Hồ sơ · Tìm vendor · Thủ tục mall · Giám sát tháo dỡ · Hoàn trả mặt bằng'),
        story:lt('For Gintell, the objective was to remove the existing store fit-out and return the leased unit to the mall in its required condition. I handled the process independently from documentation and vendor sourcing to mall coordination, onsite supervision and final site return. The work focused on a controlled dismantling sequence, protecting common areas and closing the site properly.','Với Gintell, mục tiêu là tháo dỡ phần hoàn thiện hiện hữu của cửa hàng và hoàn trả mặt bằng thuê theo yêu cầu của mall. Tôi tự phụ trách quy trình từ hồ sơ, tìm vendor, phối hợp với mall đến giám sát onsite và bàn giao cuối. Trọng tâm của dự án là tháo dỡ có kiểm soát, bảo vệ khu vực chung và đóng mặt bằng đúng quy trình.'),
        handled:ll(['Prepared dismantling documents and aligned the required mall procedure.','Sourced and coordinated the dismantling vendor.','Confirmed the work scope from the existing storefront and interior condition.','Supervised dismantling, clearance and preparation for site return.','Coordinated the final handover of the reinstated unit.'],['Chuẩn bị hồ sơ tháo dỡ và thống nhất quy trình theo yêu cầu của mall.','Tìm kiếm và điều phối vendor tháo dỡ.','Xác định phạm vi công việc từ hiện trạng mặt tiền và nội thất cửa hàng.','Giám sát tháo dỡ, thu dọn và chuẩn bị hoàn trả mặt bằng.','Phối hợp bàn giao mặt bằng sau khi hoàn trả.']),
        flow:lt('Existing Condition → Scope & Documents → Vendor → Mall Procedure → Dismantling → Clearance → Site Return','Hiện trạng → Phạm vi & hồ sơ → Vendor → Thủ tục mall → Tháo dỡ → Thu dọn → Hoàn trả mặt bằng'), outcome:lt('Strengthened my ability to own a small project end to end, including paperwork, vendor coordination, mall procedures, site control and reinstatement handover.','Củng cố khả năng tự sở hữu một dự án từ đầu đến cuối, gồm hồ sơ, điều phối vendor, thủ tục mall, kiểm soát hiện trường và bàn giao hoàn trả mặt bằng.'),
      },
      {
        id:'medical', name:'Tâm Anh Research Institute — Medical & Pharmaceutical Events', type:lt('Scientific / Medical Events','Hội thảo khoa học / Y khoa'), role:lt('Event / Project Coordinator','Điều phối sự kiện / dự án'),
        detail:lt('Regulatory · Expert contracts · POSM · Vendors · Execution · Reporting','Xin phép · Hợp đồng chuyên gia · POSM · Vendor · Thực thi · Báo cáo'),
        story:lt('Joining Tâm Anh Research Institute moved my experience into a more structured medical-event environment. My work now spans the event lifecycle: documentation and regulatory preparation, expert and speaker contracts, POSM briefing, vendor and stakeholder coordination, event execution and post-event reporting. The medical spotlight below shows selected programs from this role.','Khi gia nhập Viện Nghiên cứu Tâm Anh, kinh nghiệm của tôi chuyển sang môi trường medical event có cấu trúc chặt chẽ hơn. Công việc bao phủ toàn bộ vòng đời sự kiện: chuẩn bị hồ sơ và thủ tục, hợp đồng chuyên gia / báo cáo viên, briefing POSM, điều phối vendor và các bên liên quan, vận hành chương trình và báo cáo sau sự kiện. Phần Medical Spotlight bên dưới là các chương trình tiêu biểu trong vai trò này.'),
        handled:ll(['Prepared regulatory submissions and event documentation.','Coordinated expert / speaker contracts and program requirements.','Created and followed POSM briefs from requirement through production.','Coordinated pharmaceutical companies, medical experts, vendors and internal stakeholders.','Supported event execution and post-event reporting.'],['Chuẩn bị hồ sơ xin phép và tài liệu sự kiện.','Điều phối hợp đồng chuyên gia / báo cáo viên và các yêu cầu chương trình.','Xây dựng và theo dõi POSM brief từ yêu cầu đến sản xuất.','Phối hợp công ty dược, chuyên gia y tế, vendor và các bộ phận nội bộ.','Vận hành sự kiện và thực hiện báo cáo sau chương trình.']),
        flow:lt('Regulatory → Expert Contract → Event Documentation → POSM → Vendor → Execution → Reporting','Xin phép → Hợp đồng chuyên gia → Hồ sơ sự kiện → POSM → Vendor → Thực thi → Báo cáo'), outcome:lt('Expanded my role from onsite execution into a more complete project-coordination workflow with scientific, regulatory and stakeholder requirements.','Mở rộng vai trò từ thực thi onsite sang một quy trình điều phối dự án đầy đủ hơn với yêu cầu khoa học, hồ sơ và stakeholder.'),
      },
    ],
  },
];

const medicalCases: MedicalCase[] = [
  {
    id:'dengue', date:'11 JUN 2026',
    name:lt('Preventing Dengue Fever Before the Nationwide Peak Season','Phòng ngừa sốt xuất huyết Dengue trước mùa cao điểm trên cả nước'),
    format:lt('National CME Webinar','Webinar CME quy mô toàn quốc'), metric:lt('1,000+ healthcare professionals online','1.000+ cán bộ y tế tham dự online'),
    story:lt('A large-scale online medical education program delivered ahead of the dengue peak season. The project required structured coordination across scientific content, experts, event materials, online delivery and post-event completion so a large healthcare audience could access updated information in a controlled webinar environment.','Chương trình đào tạo y khoa trực tuyến quy mô lớn được triển khai trước mùa cao điểm sốt xuất huyết. Dự án yêu cầu điều phối có cấu trúc giữa nội dung khoa học, chuyên gia, vật liệu truyền thông, vận hành online và các công việc sau chương trình để một lượng lớn cán bộ y tế có thể tiếp cận thông tin cập nhật trong môi trường webinar được kiểm soát.'),
    handled:ll(['Event documentation and coordination workflow.','Expert / speaker coordination and program follow-up.','POSM and communication-material briefing.','Online event execution support and post-event reporting.'],['Hồ sơ sự kiện và quy trình điều phối chương trình.','Điều phối chuyên gia / báo cáo viên và theo dõi nội dung chương trình.','Briefing POSM và các vật liệu truyền thông.','Hỗ trợ vận hành online và báo cáo sau sự kiện.']),
    flow:lt('Planning → Expert Coordination → Scientific Content → Webinar Delivery → Reporting','Lập kế hoạch → Điều phối chuyên gia → Nội dung khoa học → Vận hành webinar → Báo cáo'),
    link:'https://tamri.vn/en/news/dengue-cases-double-as-the-disease-shifts-in-concerning-ways/', linkLabel:lt('Official TAMRI coverage','Bài viết chính thức từ TAMRI'),
  },
  {
    id:'oxford', date:'30 MAR 2026', name:lt('Vaccine Expert Exchange — Tâm Anh & Oxford','Trao đổi cùng chuyên gia vắc-xin Tâm Anh & Oxford'), format:lt('International Expert Panel · Ho Chi Minh City','Tọa đàm chuyên gia quốc tế · TP.HCM'), image:'/assets/oxford.jpg',
    story:lt('An expert exchange connecting Tâm Anh with Oxford vaccine specialists. The program brought international faculty into a focused scientific discussion environment, requiring careful coordination around expert profiles, communication materials, venue readiness and program flow.','Tọa đàm kết nối Tâm Anh với các chuyên gia vắc-xin từ Oxford. Chương trình đưa các chuyên gia quốc tế vào một không gian trao đổi khoa học tập trung, yêu cầu điều phối kỹ về hồ sơ chuyên gia, vật liệu truyền thông, chuẩn bị địa điểm và flow chương trình.'),
    handled:ll(['Expert / speaker coordination and event documentation.','POSM briefing and production follow-up.','Venue and program-readiness coordination.','Event execution and post-event close-out support.'],['Điều phối chuyên gia / báo cáo viên và hồ sơ sự kiện.','Briefing POSM và theo dõi sản xuất.','Điều phối địa điểm và mức độ sẵn sàng của chương trình.','Vận hành sự kiện và hỗ trợ close-out sau chương trình.']),
    flow:lt('Expert Coordination → Event Materials → Venue Readiness → Panel Delivery → Close-out','Điều phối chuyên gia → Vật liệu sự kiện → Sẵn sàng địa điểm → Tọa đàm → Close-out'),
    link:'https://www.facebook.com/reel/1647912079993341', linkLabel:lt('View event reel','Xem reel chương trình'),
  },
  {
    id:'nf1', date:'20 APR 2026', name:lt('Multidisciplinary Approach in Diagnosis & Management of Neurofibromatosis Type 1','Tiếp cận đa chuyên khoa trong chẩn đoán và quản lý u xơ thần kinh Type 1'), format:lt('Scientific Seminar · Rare Disease / Multidisciplinary Care','Sinh hoạt khoa học · Bệnh hiếm / Đa chuyên khoa'), image:'/assets/nf1.jpg',
    story:lt('A scientific seminar focused on a rare and complex genetic condition that requires multidisciplinary management. The event combined specialized medical content with a structured event workflow, from expert coordination and materials to onsite delivery and post-event completion.','Sinh hoạt khoa học tập trung vào một bệnh di truyền hiếm và phức tạp cần quản lý đa chuyên khoa. Chương trình kết hợp nội dung y khoa chuyên sâu với một workflow sự kiện có cấu trúc, từ điều phối chuyên gia, vật liệu chương trình đến vận hành onsite và hoàn tất sau sự kiện.'),
    handled:ll(['Scientific-event documentation and expert coordination.','POSM briefing and communication-material follow-up.','Venue, vendor and onsite execution coordination.','Post-event documentation and reporting support.'],['Hồ sơ sinh hoạt khoa học và điều phối chuyên gia.','Briefing POSM và theo dõi vật liệu truyền thông.','Điều phối địa điểm, vendor và vận hành onsite.','Hỗ trợ hồ sơ và báo cáo sau chương trình.']),
    flow:lt('Scientific Brief → Expert Coordination → Documentation → POSM → Onsite Delivery → Reporting','Brief khoa học → Điều phối chuyên gia → Hồ sơ → POSM → Vận hành onsite → Báo cáo'),
    link:'https://tamri.vn/en/news/multidisciplinary-approach-opens-new-directions-for-neurofibromatosis-type-1-treatment/', linkLabel:lt('Official TAMRI coverage','Bài viết chính thức từ TAMRI'),
  },
];

const featuredCases = [
  {
    id: 'capitaland', projectIds: ['lumi', 'sycamore', 'orchard'], imageId: 'lumi',
    name: 'CapitaLand — Real Estate Events',
    subtitle: lt('The Lumi · Sycamore · The Orchard Hill', 'The Lumi · Sycamore · The Orchard Hill'),
    type: lt('2024 / REAL ESTATE EVENTS', '2024 / SỰ KIỆN BẤT ĐỘNG SẢN'),
    role: lt('Event Coordinator', 'Điều phối sự kiện'),
    purpose: lt('Three real-estate events, one end-to-end delivery flow: turn the plan and brief into a real, guest-ready environment, then support the live program and close-out.', 'Ba sự kiện bất động sản với một quy trình xuyên suốt: biến kế hoạch và brief thành không gian thực tế sẵn sàng đón khách, sau đó hỗ trợ vận hành chương trình và close-out.'),
    challenge: lt('Turn approved plans into completed onsite environments while coordinating construction, backstage, guest flow and key moments on a compressed schedule.', 'Biến kế hoạch đã duyệt thành không gian hoàn chỉnh tại hiện trường, đồng thời phối hợp thi công, backstage, luồng khách và key moment trong tiến độ ngắn.'),
    solution: lt('Stay alongside the Account Manager, track priority items, coordinate backstage and route guests around the key moments.', 'Phối hợp sát Account Manager, bám hạng mục ưu tiên, điều phối backstage và phân luồng khách cho các key moment.'),
    result: lt('Supported delivery across setup, live show and post-event dismantling.', 'Theo sát việc triển khai từ setup, live show đến tháo dỡ sau chương trình.'),
  },
  {
    id: 'decathlon', projectIds: ['decathlon'], imageId: 'decathlon', name: 'Decathlon — Store Setup',
    subtitle: lt('From an empty site to a completed retail space', 'Từ mặt bằng trống đến không gian bán lẻ hoàn thiện'),
    type: lt('2022 / RETAIL SETUP', '2022 / THI CÔNG BÁN LẺ'),
    role: lt('Project / Event Coordinator', 'Điều phối dự án / sự kiện'),
    purpose: lt('Turn a retail site into a completed Decathlon store through coordinated contractor work, mall requirements and handover preparation.', 'Đưa mặt bằng thành cửa hàng Decathlon hoàn thiện thông qua điều phối nhà thầu, yêu cầu của mall và chuẩn bị bàn giao.'),
    challenge: lt('Multiple contractors and mall stakeholders working within the same delivery schedule.', 'Nhiều nhà thầu và các bên liên quan của mall cùng làm việc theo một tiến độ bàn giao.'),
    solution: lt('Track workstreams, align site access and resolve daily onsite issues through completion.', 'Bám từng hạng mục, thống nhất điều kiện thi công và xử lý phát sinh hằng ngày đến khi hoàn tất.'),
    result: lt('Supported the site through completion and handover, building experience across a full retail delivery cycle.', 'Theo dự án đến hoàn thiện và bàn giao, tích lũy kinh nghiệm trong toàn bộ chu kỳ triển khai retail.'),
  },
  {
    id: 'mocchau', projectIds: ['mocchau'], imageId: 'mocchau', name: 'Mộc Châu Creamery — Booth & Product Activation',
    subtitle: lt('AEON Mall Tân Phú / Consumer product introduction', 'AEON Mall Tân Phú / Giới thiệu sản phẩm đến người tiêu dùng'),
    type: lt('2026 / BOOTH & PRODUCT ACTIVATION', '2026 / BOOTH & GIỚI THIỆU SẢN PHẨM'),
    role: lt('Event Coordinator', 'Điều phối sự kiện'),
    purpose: lt('Bring the brand and its products into a public-facing mall activation, from booth preparation to onsite operation.', 'Đưa thương hiệu và sản phẩm đến khách tham quan tại mall, từ chuẩn bị booth đến vận hành onsite.'),
    challenge: lt('Align booth readiness, vendors and public interaction with mall operating requirements.', 'Đồng bộ booth, vendor và hoạt động với khách theo yêu cầu vận hành của mall.'),
    solution: lt('Follow preparation timing, coordinate vendors and support onsite adjustments during the product introduction.', 'Bám thời gian chuẩn bị, điều phối vendor và hỗ trợ điều chỉnh onsite khi giới thiệu sản phẩm.'),
    result: lt('Supported an organized opening and continued onsite operation during the activation.', 'Hỗ trợ mở cửa có tổ chức và duy trì vận hành onsite trong suốt activation.'),
  },
];
const allProjects=timeline.flatMap((group)=>group.projects);
const capabilities={
  en:['Project Coordination','Event Execution','Client & Stakeholder Communication','Vendor & Contractor Management','Venue / Mall Coordination','Backstage & Guest Flow','Expert & Speaker Coordination','POSM Briefing','Event Documentation & Reporting','Onsite Problem Solving'],
  vi:['Điều phối dự án','Thực thi sự kiện','Giao tiếp khách hàng & stakeholder','Quản lý vendor & nhà thầu','Phối hợp địa điểm / trung tâm thương mại','Backstage & phân luồng khách','Điều phối chuyên gia & báo cáo viên','POSM Briefing','Hồ sơ & báo cáo sự kiện','Xử lý vấn đề onsite'],
};

const ui={
  en:{navTimeline:'Timeline',navStories:'Stories',navMedical:'Medical',navContact:'Contact',eyebrow:'EVENT PROJECT PORTFOLIO · 2020—2026',heroTitle:['EVENT','PROJECT','COORDINATOR'],heroFields:'Corporate Events · B2B · Exhibition · Retail · Real Estate · Medical Events',heroDesc:'From brief to execution, I coordinate people, timelines and details to keep projects moving and deliver them cleanly onsite.',explore:'Explore project timeline',years:'6+ YEARS',industries:'MULTIPLE INDUSTRIES',focus:'COORDINATION · EXECUTION · PROBLEM SOLVING',profileLabel:'01 / PROFILE',profileTitle:['COORDINATE.','EXECUTE.','SOLVE.','DELIVER.'],profileDesc:'Event and project coordination professional with 6+ years of hands-on experience across exhibitions, retail setup, real-estate launches, B2B forums, product activations and medical events.',process:['BRIEF','PLAN','COORDINATE','EXECUTE','HANDOVER','REPORT'],timelineLabel:'02 / CAREER & PROJECT TIMELINE',timelineDesc:'A project-led career timeline. Open any project to see the story behind the final photo: context, responsibilities, workflow and what I learned from the delivery.',projectStory:'PROJECT STORY',myRole:'MY ROLE',handled:'WHAT I HANDLED',flow:'PROJECT FLOW',outcome:'WHAT THIS PROJECT ADDED',featuredLabel:'03 / FEATURED PROJECT STORIES',featuredTitle:['SELECTED WORK,','BEYOND THE FINAL PHOTO.'],featuredDesc:'A shortlist showing how my coordination style evolved from site execution into wider project ownership.',viewStory:'VIEW STORY',medicalLabel:'04 / TÂM ANH · MEDICAL EVENT SPOTLIGHT',medicalTitle:['SCIENTIFIC PROGRAMS,','STRUCTURED DELIVERY.'],medicalDesc:'Selected medical programs showing the shift from commercial event execution into documentation-heavy, expert-led and scientifically structured projects.',medicalRole:'ROLE · EVENT / PROJECT COORDINATOR',capabilitiesLabel:'05 / WHAT I DO',contactLabel:'06 / CONTACT',contactTitle:['LET’S MAKE','PROJECTS HAPPEN.'],availability:'Open to event / project coordination opportunities',location:'Ho Chi Minh City, Vietnam',backTop:'Back to top ↑',noPhoto:'STORY-FIRST PROJECT'},
  vi:{navTimeline:'Hành trình',navStories:'Câu chuyện',navMedical:'Y khoa',navContact:'Liên hệ',eyebrow:'PORTFOLIO DỰ ÁN SỰ KIỆN · 2020—2026',heroTitle:['ĐIỀU PHỐI','DỰ ÁN','SỰ KIỆN'],heroFields:'Corporate Event · B2B · Exhibition · Retail · Real Estate · Medical Event',heroDesc:'Từ brief đến thực thi, tôi điều phối con người, timeline và các chi tiết để dự án luôn chuyển động và được bàn giao chỉn chu tại hiện trường.',explore:'Xem hành trình dự án',years:'6+ NĂM',industries:'NHIỀU LĨNH VỰC',focus:'ĐIỀU PHỐI · THỰC THI · XỬ LÝ VẤN ĐỀ',profileLabel:'01 / GIỚI THIỆU',profileTitle:['ĐIỀU PHỐI.','THỰC THI.','XỬ LÝ.','BÀN GIAO.'],profileDesc:'Có hơn 6 năm kinh nghiệm thực chiến trong điều phối event và project ở các mảng triển lãm, retail setup, sự kiện bất động sản, B2B forum, product activation và medical event.',process:['BRIEF','LẬP KẾ HOẠCH','ĐIỀU PHỐI','THỰC THI','BÀN GIAO','BÁO CÁO'],timelineLabel:'02 / HÀNH TRÌNH NGHỀ NGHIỆP & DỰ ÁN',timelineDesc:'Timeline theo dự án. Mở từng project để xem câu chuyện phía sau ảnh thành phẩm: bối cảnh, phần việc, workflow và điều tôi tích lũy được từ mỗi lần bàn giao.',projectStory:'CÂU CHUYỆN DỰ ÁN',myRole:'VAI TRÒ CỦA TÔI',handled:'TÔI PHỤ TRÁCH',flow:'QUY TRÌNH DỰ ÁN',outcome:'DỰ ÁN NÀY BỔ SUNG GÌ CHO TÔI',featuredLabel:'03 / CÂU CHUYỆN DỰ ÁN TIÊU BIỂU',featuredTitle:['DỰ ÁN TIÊU BIỂU,','KHÔNG CHỈ LÀ ẢNH THÀNH PHẨM.'],featuredDesc:'Một số dự án thể hiện quá trình phát triển từ bám hiện trường đến mức độ ownership rộng hơn trong điều phối dự án.',viewStory:'XEM CÂU CHUYỆN',medicalLabel:'04 / TÂM ANH · MEDICAL EVENT SPOTLIGHT',medicalTitle:['CHƯƠNG TRÌNH KHOA HỌC,','QUY TRÌNH TRIỂN KHAI CHẶT CHẼ.'],medicalDesc:'Các chương trình tiêu biểu cho bước chuyển từ commercial event sang những dự án có hồ sơ, chuyên gia và cấu trúc khoa học chặt chẽ hơn.',medicalRole:'VAI TRÒ · EVENT / PROJECT COORDINATOR',capabilitiesLabel:'05 / NĂNG LỰC',contactLabel:'06 / LIÊN HỆ',contactTitle:['CÙNG BIẾN','KẾ HOẠCH THÀNH HIỆN THỰC.'],availability:'Sẵn sàng cho các cơ hội event / project coordination',location:'TP. Hồ Chí Minh, Việt Nam',backTop:'Lên đầu trang ↑',noPhoto:'PROJECT TẬP TRUNG VÀO CÂU CHUYỆN'},
};

export default function PortfolioApp(){
  const[lang,setLang]=useState<Lang>('en');
  const[activeIds,setActiveIds]=useState<string[]|null>(null);
  useEffect(()=>{document.documentElement.lang=lang;},[lang]);
  const text=ui[lang]; const t=(value:LocalText)=>value[lang]; const list=(value:LocalList)=>value[lang];
  return <main>
    <nav className="nav"><a className="brand" href="#top">THỊNH / 2026</a><div className="nav-right"><div className="nav-links"><a href="#timeline">{text.navTimeline}</a><a href="#stories">{text.navStories}</a><a href="#medical">{text.navMedical}</a><a href="#contact">{text.navContact}</a></div><div className="lang-toggle"><button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button><span>/</span><button className={lang==='vi'?'active':''} onClick={()=>setLang('vi')}>VI</button></div></div></nav>
    <section id="top" className="hero section-shell"><div className="eyebrow"><span className="dot"/> {text.eyebrow}</div><div className="hero-grid"><h1>{text.heroTitle[0]}<br/>{text.heroTitle[1]}<br/><em>{text.heroTitle[2]}</em></h1><div className="hero-side"><p className="hero-name">ĐINH VŨ TIẾN THỊNH</p><p>{text.heroFields}</p><p className="muted">{text.heroDesc}</p><a className="cta" href="#timeline">{text.explore} <ArrowDown size={18}/></a></div></div><div className="hero-strip"><span>{text.years}</span><span>{text.industries}</span><span>{text.focus}</span></div></section>
    <section className="intro section-shell"><div className="section-label">{text.profileLabel}</div><div className="intro-grid"><h2>{text.profileTitle.map((line)=><span key={line}>{line}<br/></span>)}</h2><div><p className="lead">{text.profileDesc}</p><div className="process">{text.process.map((item,index)=><span key={item}>{item}{index<text.process.length-1&&<b>→</b>}</span>)}</div></div></div></section>
    <section id="timeline" className="timeline section-shell">
      <div className="section-label">{text.timelineLabel}</div><div className="timeline-head"><h2>2020 → 2026</h2><p>{text.timelineDesc}</p></div>
      <div className="timeline-list">{timeline.map(group => <article className="year-block" key={group.year}>
        <div className="year-rail"><span className="year">{group.year}</span><span className="rail-dot"/></div>
        <div className="year-content"><div className="company"><BriefcaseBusiness size={16}/> {group.company}</div>
          {group.projects.map((project,index) => <div className="project-wrap" id={'project-'+project.id} key={project.id}>
            <button type="button" className="project" onClick={()=>setActiveIds([project.id])} aria-haspopup="dialog">
              <span className="project-num">{String(index+1).padStart(2,'0')}</span>
              <div className="project-main"><div className="project-meta"><span>{t(project.type)}</span><span>{t(project.role)}</span></div><h3>{project.name}</h3><p>{t(project.detail)}</p></div>
              <ProjectImage projectId={project.id} lang={lang} className="project-thumb" sizes="(max-width: 760px) 70vw, 178px"/>
              <ArrowUpRight className="project-arrow" size={24}/>
            </button>
          </div>)}
        </div>
      </article>)}</div>
    </section>
    <section className="featured section-shell" id="stories">
      <div className="section-label">{text.featuredLabel}</div>
      <div className="featured-intro"><h2>{text.featuredTitle.map(line=><span key={line}>{line}<br/></span>)}</h2><p>{lang === 'en' ? 'Three selected cases across real estate, retail and product activation. See the build-up, the details and the work behind delivery.' : 'Ba case tiêu biểu trong bất động sản, retail và giới thiệu sản phẩm. Xem quá trình thi công, các chi tiết và công việc phía sau mỗi lần bàn giao.'}</p></div>
      <div className="case-grid">{featuredCases.map((item,index)=><article className="case-card" key={item.id} data-featured-case={item.id}>
        <div className="featured-visual">
          <button type="button" className="case-cover-button" onClick={()=>setActiveIds(item.projectIds)} aria-haspopup="dialog" aria-label={text.viewStory+': '+item.name}>
            <div className="case-image-wrap"><ProjectImage projectId={item.imageId} lang={lang} sizes="(max-width: 760px) 90vw, 43vw"/><span className="case-index">0{index+1}</span><span className="cover-open"><ArrowUpRight size={24}/></span></div>
          </button>
          <div className="cover-caption"><span>{phaseLabel(projectMedia[item.imageId][0], lang)}</span><p>{projectMedia[item.imageId][0].caption[lang]}</p></div>
          {item.id==='capitaland'&&<div className="featured-events"><span>The Lumi</span><span>Sycamore</span><span>The Orchard Hill</span></div>}
        </div>
        <div className="featured-copy"><div className="case-meta"><span>{t(item.type)}</span></div><h3>{item.name}</h3><p className="featured-subtitle">{t(item.subtitle)}</p>
          <div className="featured-role"><span>{caseLabels[lang].role}</span><strong>{t(item.role)}</strong></div>
          <p className="featured-purpose">{t(item.purpose)}</p>
          <dl className="featured-facts">{(['challenge','solution','result'] as const).map(field=><div key={field}><dt>{caseLabels[lang][field]}</dt><dd>{t(item[field])}</dd></div>)}</dl>
          <button type="button" className="case-link" onClick={()=>setActiveIds(item.projectIds)} aria-haspopup="dialog">{text.viewStory} <ArrowUpRight size={18}/></button>
        </div>
      </article>)}</div>
    </section>
    <section id="medical" className="medical section-shell"><div className="section-label">{text.medicalLabel}</div><div className="medical-head"><h2>{text.medicalTitle.map((line)=><span key={line}>{line}<br/></span>)}</h2><p>{text.medicalDesc}</p></div><div className="medical-grid">{medicalCases.map((item)=><article className={`medical-card ${item.image?'':'medical-card-metric'}`} key={item.id}>{item.image?<div className="medical-image-wrap"><ProjectImage projectId={item.id} lang={lang} sizes="240px"/></div>:<div className="metric-visual"><span>ONLINE CME</span><strong>1,000+</strong><small>HCPs</small></div>}<div className="medical-body"><div className="medical-date">{item.date}</div><div className="medical-format">{t(item.format)}</div><h3>{t(item.name)}</h3>{item.metric&&<div className="medical-metric">{t(item.metric)}</div>}<p className="medical-story">{t(item.story)}</p><div className="medical-role">{text.medicalRole}</div><ul>{list(item.handled).map((point)=><li key={point}>{point}</li>)}</ul><div className="medical-flow"><span>{text.flow}</span><p>{t(item.flow)}</p></div>{item.link&&item.linkLabel&&<a href={item.link} target="_blank" rel="noreferrer" className="external-link">{t(item.linkLabel)} <ExternalLink size={15}/></a>}</div></article>)}</div></section>
    <section className="capabilities section-shell"><div className="section-label">{text.capabilitiesLabel}</div><div className="cap-grid">{capabilities[lang].map((cap,index)=><div className="cap" key={cap}><span>{String(index+1).padStart(2,'0')}</span><p>{cap}</p></div>)}</div></section>
    <section id="contact" className="contact section-shell"><div className="section-label">{text.contactLabel}</div><h2>{text.contactTitle[0]}<br/><em>{text.contactTitle[1]}</em></h2><div className="contact-row"><span><CalendarDays size={16}/> {text.availability}</span><span><MapPin size={16}/> {text.location}</span></div><div className="contact-links"><a href="tel:+84334012599"><Phone size={18}/><span>0334 012 599</span></a><a href="mailto:davidthinh3.work@gmail.com"><Mail size={18}/><span>davidthinh3.work@gmail.com</span></a><a href="https://www.linkedin.com/in/david-thinh-95472a387" target="_blank" rel="noreferrer"><ExternalLink size={18}/><span>LinkedIn</span></a></div></section>
    <footer className="footer section-shell"><span>© 2026 ĐINH VŨ TIẾN THỊNH</span><a href="#top">{text.backTop}</a></footer>
    {activeIds && <CaseStudy key={activeIds.join("-")} projects={activeIds.map(id=>allProjects.find(p=>p.id===id)!)} lang={lang} onClose={()=>setActiveIds(null)}/>}
  </main>;
}
