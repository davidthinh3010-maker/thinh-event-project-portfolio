import { useState } from 'react';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CalendarDays, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react';

type Lang = 'en' | 'vi';
type LocalText = { en: string; vi: string };
type Project = {
  id: string;
  name: string;
  type: LocalText;
  role: LocalText;
  detail: LocalText;
  image?: string;
  overview?: LocalText;
  handled?: { en: string[]; vi: string[] };
  flow?: LocalText;
};

const ASSET_BASE = 'https://raw.githubusercontent.com/davidthinh3010-maker/thinh-event-project-portfolio/main/public/assets';
const lt = (en: string, vi: string): LocalText => ({ en, vi });

const overnightRealEstateHandled = {
  en: [
    'Coordinated fast-turnaround build-up, with major construction work completed overnight before event opening.',
    'Stayed close to the Account Manager to follow priority workstreams and keep execution moving on schedule.',
    'Supported backstage operations, guest flow and crowd routing to protect key moments during the live event.',
    'Coordinated post-event dismantling and site clearance after the program.'
  ],
  vi: [
    'Điều phối thi công gấp, với các hạng mục chính được triển khai xuyên đêm để kịp thời điểm mở sự kiện.',
    'Phối hợp sát với Account Manager để bám các hạng mục ưu tiên và đảm bảo tiến độ thực thi.',
    'Phụ trách hỗ trợ backstage, phân luồng khách và kiểm soát dòng di chuyển để các key moment diễn ra trọn vẹn.',
    'Điều phối tháo dỡ và hoàn trả hiện trường sau sự kiện.'
  ]
};

const timeline: { year: string; company: string; projects: Project[] }[] = [
  { year: '2020–2021', company: 'Kingsmen Vietnam', projects: [
    {
      id: 'gamuda', name: 'Gamuda Vietnam — Christmas & Tet Decoration',
      type: lt('Seasonal / Property Activation', 'Trang trí mùa lễ / Kích hoạt bất động sản'),
      role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Contractor coordination · Drawing-to-site execution · Client coordination · Timeline control', 'Điều phối nhà thầu · Từ bản vẽ ra thực tế · Phối hợp khách hàng · Kiểm soát tiến độ'),
      image: `${ASSET_BASE}/gamuda.jpg`,
      overview: lt('Seasonal Christmas & Tet decoration across Gamuda / Celadon City public and residential areas.', 'Trang trí Giáng Sinh và Tết tại nhiều khu vực công cộng và khu dân cư thuộc Gamuda / Celadon City.'),
      handled: {
        en: ['Coordinated contractors for decoration at roundabouts, residential areas and entrance gates.', 'Translated technical drawings into practical onsite execution with contractors.', 'Coordinated directly with the client when site conditions required adjustment.', 'Followed installation progress and kept work aligned with the timeline.'],
        vi: ['Điều phối nhà thầu thi công trang trí tại vòng xoay, khu dân cư và cổng vào.', 'Chuyển yêu cầu từ bản vẽ kỹ thuật sang phương án thi công thực tế cùng nhà thầu.', 'Phối hợp trực tiếp với khách hàng khi hiện trường cần điều chỉnh.', 'Theo dõi tiến độ lắp đặt và đảm bảo công việc bám timeline.']
      },
      flow: lt('Drawing → Contractor → Site → Problem → Client → Solution → Deadline', 'Bản vẽ → Nhà thầu → Hiện trường → Vấn đề → Khách hàng → Giải pháp → Deadline')
    },
  ]},
  { year: '2022', company: 'Kingsmen Vietnam', projects: [
    {
      id: 'prada', name: 'Prada — Exhibition Room Setup',
      type: lt('Luxury Exhibition Setup', 'Thi công không gian triển lãm cao cấp'),
      role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Detail control · Fast-turnaround setup · Contractor coordination · Onsite execution', 'Kiểm soát chi tiết · Thi công gấp · Điều phối nhà thầu · Thực thi onsite'),
      overview: lt('A fast-turnaround luxury exhibition setup where finishing quality, visual accuracy and timing required close attention.', 'Dự án thi công không gian triển lãm cao cấp với thời gian gấp, yêu cầu độ chính xác và mức độ hoàn thiện rất cao.'),
      handled: {
        en: ['Coordinated the setup under a compressed timeline.', 'Closely checked finishing details and visual alignment throughout installation.', 'Worked with contractors to resolve small execution issues quickly.', 'Followed progress closely to keep the project ready on time.'],
        vi: ['Điều phối thi công trong timeline rất gấp.', 'Kiểm tra kỹ độ hoàn thiện và tính chính xác của các chi tiết trong suốt quá trình lắp đặt.', 'Phối hợp nhà thầu xử lý nhanh các vấn đề nhỏ phát sinh tại hiện trường.', 'Bám sát tiến độ để dự án hoàn thành đúng thời điểm.']
      },
      flow: lt('Detail Check → Contractor → Fast Fix → Quality Control → Ready on Time', 'Kiểm tra chi tiết → Nhà thầu → Xử lý nhanh → Kiểm soát chất lượng → Bàn giao đúng giờ')
    },
    {
      id: 'tokyo', name: 'Tokyo Festival — Saigon Centre',
      type: lt('Exhibition', 'Triển lãm'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Drawing → Timeline → Technical Check → Mall Coordination → Inspection → Handover', 'Bản vẽ → Timeline → Kiểm tra kỹ thuật → Phối hợp TTTM → Nghiệm thu → Bàn giao'),
      image: `${ASSET_BASE}/tokyo.jpg`,
      overview: lt('Exhibition and festival installation at Saigon Centre.', 'Thi công khu vực triển lãm và lễ hội tại Saigon Centre.'),
      handled: {
        en: ['Received and followed technical drawings.', 'Tracked the timeline and checked technical details onsite.', 'Coordinated contractors and the Saigon Centre / mall team.', 'Supported inspection, acceptance and handover.'],
        vi: ['Tiếp nhận và bám theo bản vẽ kỹ thuật.', 'Theo dõi timeline và kiểm tra chi tiết kỹ thuật onsite.', 'Điều phối nhà thầu và đội ngũ Saigon Centre / trung tâm thương mại.', 'Hỗ trợ kiểm tra, nghiệm thu và bàn giao.']
      },
      flow: lt('Drawing → Timeline → Technical Check → Mall Coordination → Inspection → Handover', 'Bản vẽ → Timeline → Kiểm tra kỹ thuật → Phối hợp TTTM → Nghiệm thu → Bàn giao')
    },
    {
      id: 'decathlon', name: 'Decathlon — Store Setup',
      type: lt('Retail Project', 'Dự án bán lẻ'), role: lt('Event Coordinator', 'Điều phối dự án'),
      detail: lt('Contractor coordination · Mall coordination · Site troubleshooting · Handover', 'Điều phối nhà thầu · Phối hợp TTTM · Xử lý onsite · Bàn giao'),
      image: `${ASSET_BASE}/decathlon.jpg`,
      overview: lt('Store setup project transforming an empty retail space into a completed Decathlon store.', 'Dự án biến mặt bằng trống thành cửa hàng Decathlon hoàn thiện.'),
      handled: {
        en: ['Coordinated contractors and workstreams across the store setup.', 'Worked with mall / venue, developer-investor and landlord / property stakeholders.', 'Followed schedule and handled ad-hoc issues onsite.', 'Supported execution through completion and handover.'],
        vi: ['Điều phối nhà thầu và các hạng mục trong quá trình setup cửa hàng.', 'Phối hợp với trung tâm thương mại / địa điểm, chủ đầu tư và đơn vị quản lý mặt bằng.', 'Theo dõi lịch trình và xử lý các vấn đề phát sinh onsite.', 'Theo dự án đến giai đoạn hoàn thiện và bàn giao.']
      },
      flow: lt('Empty Space → Contractors → Coordination → Troubleshooting → Completed Store', 'Mặt bằng trống → Nhà thầu → Điều phối → Xử lý phát sinh → Cửa hàng hoàn thiện')
    },
    {
      id: 'keppel', name: 'Keppel Land — Recycled Art Exhibition',
      type: lt('Exhibition', 'Triển lãm'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Setup supervision · Artwork & POSM logging · Event-day support', 'Giám sát setup · Kiểm kê tác phẩm & POSM · Hỗ trợ ngày sự kiện'),
      overview: lt('Recycled-art exhibition project combining exhibition installation, asset control and live-event support.', 'Dự án triển lãm nghệ thuật tái chế kết hợp thi công, kiểm soát hiện vật và hỗ trợ vận hành sự kiện.'),
      handled: {
        en: ['Supervised contractors setting up according to drawings.', 'Logged artworks and POSM items during preparation.', 'Supported the Account Manager during the event.', 'Helped keep setup and event-day tasks on track.'],
        vi: ['Giám sát nhà thầu thi công theo bản vẽ.', 'Kiểm kê tác phẩm và POSM trong giai đoạn chuẩn bị.', 'Hỗ trợ Account Manager trong ngày sự kiện.', 'Đảm bảo các đầu việc setup và vận hành bám tiến độ.']
      },
      flow: lt('Drawing → Setup Supervision → Artwork/POSM Log → Event Support', 'Bản vẽ → Giám sát setup → Kiểm kê tác phẩm/POSM → Hỗ trợ sự kiện')
    },
  ]},
  { year: '2023', company: 'Kingsmen Vietnam', projects: [
    {
      id: 'forbes', name: 'Forbes Business Forum',
      type: lt('Business Event', 'Sự kiện doanh nghiệp'), role: lt('Event Executive', 'Event Executive'),
      detail: lt('Construction supervision · Manpower coordination · AAM support · Onsite operations', 'Giám sát thi công · Điều phối manpower · Hỗ trợ AAM · Vận hành onsite'),
      image: `${ASSET_BASE}/forbes.jpg`,
      overview: lt('Business forum event supporting the account and project team from build-up through live operations.', 'Diễn đàn doanh nghiệp, hỗ trợ team account và project từ giai đoạn thi công đến vận hành chương trình.'),
      handled: {
        en: ['Supported the Assistant Account Manager (AAM) and Manager during preparation and event delivery.', 'Supervised construction of event items.', 'Provided and coordinated helpers, then managed them onsite.', 'Followed tasks and progress and handled onsite issues.'],
        vi: ['Hỗ trợ Assistant Account Manager (AAM) và Manager trong quá trình chuẩn bị và vận hành.', 'Giám sát thi công các hạng mục sự kiện.', 'Cung cấp, điều phối và quản lý helper onsite.', 'Theo dõi đầu việc, tiến độ và xử lý vấn đề phát sinh.']
      },
      flow: lt('Build-up → Manpower → AAM Support → Live Operations → Issue Handling', 'Thi công → Manpower → Hỗ trợ AAM → Vận hành → Xử lý phát sinh')
    },
  ]},
  { year: '2024', company: 'Kingsmen Vietnam', projects: [
    {
      id: 'lumi', name: 'CapitaLand — The Lumi', type: lt('Real Estate Event', 'Sự kiện bất động sản'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Overnight build · Backstage · Guest flow · Key moment · Dismantling', 'Thi công xuyên đêm · Backstage · Phân luồng khách · Key moment · Tháo dỡ'),
      overview: lt('Fast-turnaround real-estate event requiring overnight construction and tight coordination from build-up through live operations and dismantling.', 'Sự kiện bất động sản có tiến độ rất gấp, thi công xuyên đêm và cần điều phối chặt từ build-up đến vận hành và tháo dỡ.'),
      handled: overnightRealEstateHandled,
      flow: lt('Night Build → AM Coordination → Backstage & Guest Flow → Key Moment → Dismantling', 'Thi công đêm → Phối hợp AM → Backstage & Phân luồng khách → Key Moment → Tháo dỡ')
    },
    {
      id: 'sycamore', name: 'CapitaLand — Sycamore', type: lt('Real Estate Event', 'Sự kiện bất động sản'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Overnight build · Backstage · Guest flow · Key moment · Dismantling', 'Thi công xuyên đêm · Backstage · Phân luồng khách · Key moment · Tháo dỡ'),
      overview: lt('Fast-turnaround real-estate event delivered on an overnight build schedule with live-event coordination and post-event dismantling.', 'Sự kiện bất động sản với lịch thi công xuyên đêm, vận hành live event và tháo dỡ ngay sau chương trình.'),
      handled: overnightRealEstateHandled,
      flow: lt('Night Build → AM Coordination → Backstage & Guest Flow → Key Moment → Dismantling', 'Thi công đêm → Phối hợp AM → Backstage & Phân luồng khách → Key Moment → Tháo dỡ')
    },
    {
      id: 'orchard', name: 'CapitaLand — The Orchard Hill', type: lt('Real Estate Event', 'Sự kiện bất động sản'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Overnight build · Backstage · Guest flow · Key moment · Dismantling', 'Thi công xuyên đêm · Backstage · Phân luồng khách · Key moment · Tháo dỡ'),
      overview: lt('Fast-turnaround real-estate event combining overnight construction, backstage support, guest routing and key-moment execution.', 'Sự kiện bất động sản kết hợp thi công xuyên đêm, hỗ trợ backstage, phân luồng khách và đảm bảo key moment.'),
      handled: overnightRealEstateHandled,
      flow: lt('Night Build → AM Coordination → Backstage & Guest Flow → Key Moment → Dismantling', 'Thi công đêm → Phối hợp AM → Backstage & Phân luồng khách → Key Moment → Tháo dỡ')
    },
    {
      id: 'blum', name: 'Blum — B2B Booth', type: lt('B2B Exhibition', 'Gian hàng B2B'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Booth setup · Contractor coordination · Schedule control · Onsite execution', 'Setup gian hàng · Điều phối nhà thầu · Kiểm soát tiến độ · Thực thi onsite'),
      overview: lt('B2B exhibition booth project focused on setup coordination and onsite delivery.', 'Dự án gian hàng triển lãm B2B tập trung vào điều phối setup và thực thi onsite.'),
      handled: {
        en: ['Coordinated contractors and setup workstreams.', 'Tracked the installation schedule and onsite tasks.', 'Supported technical and operational requirements during setup.', 'Stayed onsite through delivery to keep execution aligned.'],
        vi: ['Điều phối nhà thầu và các hạng mục setup.', 'Theo dõi timeline lắp đặt và đầu việc onsite.', 'Hỗ trợ các yêu cầu kỹ thuật và vận hành trong quá trình thi công.', 'Bám hiện trường đến khi hoàn thành để đảm bảo thực thi đúng yêu cầu.']
      },
      flow: lt('Brief → Contractor → Setup → Onsite Check → Delivery', 'Brief → Nhà thầu → Setup → Kiểm tra onsite → Bàn giao')
    },
  ]},
  { year: '2025', company: 'KKO.vn', projects: [
    {
      id: 'geso', name: 'GESO — Business Forum', type: lt('Business Forum / Booth', 'Diễn đàn doanh nghiệp / Gian hàng'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Booth setup · Team coordination · Schedule tracking · Onsite execution', 'Setup gian hàng · Điều phối team · Theo dõi tiến độ · Thực thi onsite'),
      overview: lt('Business forum and booth project delivered with a small onsite team.', 'Dự án diễn đàn doanh nghiệp và gian hàng được triển khai với team onsite quy mô nhỏ.'),
      handled: {
        en: ['Coordinated booth setup and onsite tasks.', 'Worked with the project team to follow the delivery timeline.', 'Supported issue handling during setup and event operations.', 'Helped keep the team aligned on priorities onsite.'],
        vi: ['Điều phối setup gian hàng và các đầu việc onsite.', 'Phối hợp team dự án để bám tiến độ bàn giao.', 'Hỗ trợ xử lý phát sinh trong giai đoạn setup và vận hành.', 'Giữ các đầu việc ưu tiên của team được đồng bộ tại hiện trường.']
      },
      flow: lt('Setup Plan → Team Coordination → Onsite Execution → Event Support', 'Kế hoạch setup → Điều phối team → Thực thi onsite → Hỗ trợ sự kiện')
    },
  ]},
  { year: '2026', company: 'Kingsmen Vietnam · KKO.vn · Independent · Tâm Anh Research Institute', projects: [
    {
      id: 'gladia', name: 'Gladia Heights — Kick-off Event', type: lt('Kick-off / Real Estate', 'Kick-off / Bất động sản'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('Setup coordination · Schedule control · Backstage support · Onsite execution', 'Điều phối setup · Kiểm soát tiến độ · Hỗ trợ backstage · Thực thi onsite'),
      overview: lt('Real-estate kick-off event requiring coordinated setup and fast onsite execution.', 'Sự kiện kick-off bất động sản yêu cầu điều phối setup và thực thi onsite nhanh chóng.'),
      handled: {
        en: ['Coordinated setup workstreams and contractors.', 'Followed the event timeline and priority tasks.', 'Supported backstage and onsite operations.', 'Helped resolve issues quickly to keep the program moving.'],
        vi: ['Điều phối các hạng mục setup và nhà thầu.', 'Theo dõi timeline sự kiện và các đầu việc ưu tiên.', 'Hỗ trợ backstage và vận hành onsite.', 'Xử lý nhanh phát sinh để chương trình diễn ra đúng tiến độ.']
      },
      flow: lt('Setup → Timeline Control → Backstage → Live Event → Close-out', 'Setup → Kiểm soát timeline → Backstage → Live event → Kết thúc')
    },
    {
      id: 'panasonic', name: 'Panasonic — DERGO', type: lt('B2B Exhibition', 'Triển lãm B2B'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('B2B booth · Vendor coordination · Setup supervision · Onsite delivery', 'Gian hàng B2B · Điều phối vendor · Giám sát setup · Bàn giao onsite'),
      overview: lt('B2B exhibition booth project at DERGO focused on setup coordination and delivery.', 'Dự án gian hàng triển lãm B2B tại DERGO, tập trung vào điều phối setup và bàn giao.'),
      handled: {
        en: ['Coordinated booth setup requirements and vendors.', 'Tracked progress and onsite delivery.', 'Supported technical checks and issue handling during setup.', 'Stayed aligned with the project team to complete the booth on time.'],
        vi: ['Điều phối yêu cầu setup gian hàng và vendor.', 'Theo dõi tiến độ và bàn giao onsite.', 'Hỗ trợ kiểm tra kỹ thuật và xử lý phát sinh trong quá trình setup.', 'Phối hợp team dự án để hoàn thiện gian hàng đúng thời gian.']
      },
      flow: lt('Brief → Vendor → Setup → Technical Check → Delivery', 'Brief → Vendor → Setup → Kiểm tra kỹ thuật → Bàn giao')
    },
    {
      id: 'mocchau', name: 'Mộc Châu Creamery — Product Launch', type: lt('Product Launch', 'Ra mắt sản phẩm'), role: lt('Event Coordinator', 'Điều phối sự kiện'),
      detail: lt('AEON Mall Tân Phú · Launch setup · Vendor coordination · Product introduction', 'AEON Mall Tân Phú · Setup launch · Điều phối vendor · Giới thiệu sản phẩm'),
      overview: lt('Product launch and introduction event at AEON Mall Tân Phú.', 'Sự kiện khai trương, ra mắt và giới thiệu sản phẩm tại AEON Mall Tân Phú.'),
      handled: {
        en: ['Coordinated setup and vendors for the launch area.', 'Followed the preparation timeline and onsite requirements.', 'Supported product-introduction event operations.', 'Handled onsite adjustments with the project team.'],
        vi: ['Điều phối setup và vendor cho khu vực launch.', 'Theo dõi timeline chuẩn bị và các yêu cầu onsite.', 'Hỗ trợ vận hành hoạt động giới thiệu sản phẩm.', 'Xử lý các điều chỉnh tại hiện trường cùng team dự án.']
      },
      flow: lt('Setup → Vendor Coordination → Launch Readiness → Product Introduction → Close-out', 'Setup → Điều phối vendor → Sẵn sàng launch → Giới thiệu sản phẩm → Kết thúc')
    },
    {
      id: 'gintell', name: 'Gintell — AEON Mall Booth Dismantling', type: lt('Independent Project', 'Dự án cá nhân'), role: lt('Independent Project Coordinator', 'Điều phối dự án độc lập'),
      detail: lt('Documentation · Vendor sourcing · Mall meetings · Site supervision · Handover', 'Hồ sơ · Tìm vendor · Họp với mall · Giám sát thi công · Bàn giao mặt bằng'),
      overview: lt('An independent project handled end-to-end, from preparation and vendor sourcing through mall coordination, site supervision and final handover.', 'Dự án cá nhân được phụ trách end-to-end, từ chuẩn bị hồ sơ và tìm vendor đến phối hợp mall, giám sát thi công và bàn giao mặt bằng.'),
      handled: {
        en: ['Prepared the required project documentation.', 'Sourced and coordinated vendors.', 'Joined meetings with the mall to align requirements and site procedures.', 'Supervised dismantling work onsite.', 'Coordinated final site handover after completion.'],
        vi: ['Chuẩn bị hồ sơ cần thiết cho dự án.', 'Tìm kiếm và điều phối vendor.', 'Tham gia họp với mall để thống nhất yêu cầu và quy trình hiện trường.', 'Giám sát công tác tháo dỡ onsite.', 'Phối hợp bàn giao mặt bằng sau khi hoàn tất.']
      },
      flow: lt('Documentation → Vendor Sourcing → Mall Meeting → Site Supervision → Handover', 'Hồ sơ → Tìm vendor → Họp mall → Giám sát hiện trường → Bàn giao')
    },
    {
      id: 'medical', name: 'Medical & Pharmaceutical Events', type: lt('Scientific / Medical Events', 'Hội thảo khoa học / Y khoa'), role: lt('Event / Project Coordinator', 'Điều phối sự kiện / dự án'),
      detail: lt('Regulatory submission → Expert contracts → POSM → Vendor coordination → Execution → Reporting', 'Hồ sơ xin phép → Hợp đồng chuyên gia → POSM → Vendor → Thực thi → Báo cáo'),
      overview: lt('End-to-end scientific seminars and pharmaceutical events at Tâm Anh Research Institute. Detailed flagship events are being added.', 'Các hội thảo khoa học và sự kiện dược phẩm end-to-end tại Viện Nghiên cứu Tâm Anh. Các case tiêu biểu đang được bổ sung.'),
      handled: {
        en: ['Regulatory submission and event documentation.', 'Expert and speaker contract coordination.', 'Full POSM briefing from requirement through production.', 'Coordination with pharmaceutical companies, medical experts, vendors and internal stakeholders.', 'Event execution and post-event reporting.'],
        vi: ['Thực hiện hồ sơ xin phép và tài liệu sự kiện.', 'Điều phối hợp đồng chuyên gia / báo cáo viên.', 'Xây dựng và theo dõi full POSM brief từ yêu cầu đến sản xuất.', 'Phối hợp công ty dược, chuyên gia y tế, vendor và các bộ phận nội bộ.', 'Vận hành sự kiện và thực hiện báo cáo sau chương trình.']
      },
      flow: lt('Regulatory → Expert Contract → Event Documentation → POSM → Vendor → Execution → Reporting', 'Xin phép → Hợp đồng chuyên gia → Hồ sơ sự kiện → POSM → Vendor → Thực thi → Báo cáo')
    },
  ]},
];

const caseStudyIds = ['gamuda', 'decathlon', 'tokyo', 'forbes'];
const allProjects = timeline.flatMap((group) => group.projects);
const caseStudies = caseStudyIds.map((id) => allProjects.find((project) => project.id === id)!).filter(Boolean);

const capabilities = {
  en: ['Project Coordination', 'Event Execution', 'Client Communication', 'Vendor & Contractor Management', 'Venue / Mall Coordination', 'Expert & Speaker Coordination', 'POSM Briefing', 'Event Documentation & Reporting'],
  vi: ['Điều phối dự án', 'Thực thi sự kiện', 'Giao tiếp khách hàng', 'Quản lý vendor & nhà thầu', 'Phối hợp địa điểm / trung tâm thương mại', 'Điều phối chuyên gia & báo cáo viên', 'POSM Briefing', 'Hồ sơ & báo cáo sự kiện']
};

const ui = {
  en: {
    timeline: 'Timeline', about: 'About', cases: 'Cases', contact: 'Contact',
    eyebrow: 'EVENT PROJECT PORTFOLIO · 2020—2026',
    hero1: 'EVENT', hero2: 'PROJECT', hero3: 'COORDINATOR',
    heroFields: 'Corporate Events · B2B · Exhibition · Retail · Medical Events',
    heroDesc: 'From brief to execution, I coordinate the people, timelines and details that bring projects to life.',
    explore: 'Explore my timeline', years: '6+ YEARS', industries: 'MULTIPLE INDUSTRIES', focus: 'ONE FOCUS: MAKING PROJECTS HAPPEN',
    profileLabel: '01 / PROFILE', profileTitle: 'COORDINATE.\nEXECUTE.\nSOLVE.\nDELIVER.',
    profileDesc: 'Event and project coordination professional with 6+ years of experience across corporate events, exhibitions, retail projects, real estate launches, B2B forums and medical events.',
    process: ['BRIEF','PLAN','COORDINATE','EXECUTE','HANDOVER','REPORT'],
    timelineLabel: '02 / CAREER & PROJECT TIMELINE', timelineDesc: 'A project-led timeline showing what I worked on, where I contributed and how my role evolved. Click a project to open its detail.',
    projectPlaceholder: 'PROJECT', overview: 'PROJECT OVERVIEW', myRole: 'MY ROLE', handled: 'WHAT I HANDLED', flow: 'PROJECT FLOW',
    casesLabel: '03 / FEATURED CASE STUDIES', casesTitle: 'SELECTED PROJECTS,\nBEYOND THE FINAL PHOTO.',
    casesDesc: 'Each case highlights the project context, my role, the coordination work and the execution flow behind the result.', viewProject: 'VIEW PROJECT',
    capabilitiesLabel: '04 / WHAT I DO', contactLabel: '05 / CONTACT', contactTitle1: "LET'S MAKE", contactTitle2: 'PROJECTS HAPPEN.',
    availability: 'Available for event / project opportunities', location: 'Ho Chi Minh City, Vietnam', backTop: 'Back to top ↑'
  },
  vi: {
    timeline: 'Hành trình', about: 'Giới thiệu', cases: 'Dự án', contact: 'Liên hệ',
    eyebrow: 'PORTFOLIO DỰ ÁN SỰ KIỆN · 2020—2026',
    hero1: 'ĐIỀU PHỐI', hero2: 'DỰ ÁN', hero3: 'SỰ KIỆN',
    heroFields: 'Corporate Event · B2B · Exhibition · Retail · Medical Events',
    heroDesc: 'Từ brief đến thực thi, tôi điều phối con người, timeline và các chi tiết để đưa dự án vào vận hành thực tế.',
    explore: 'Xem hành trình dự án', years: '6+ NĂM', industries: 'NHIỀU LĨNH VỰC', focus: 'MỘT MỤC TIÊU: ĐƯA DỰ ÁN VÀO THỰC TẾ',
    profileLabel: '01 / GIỚI THIỆU', profileTitle: 'ĐIỀU PHỐI.\nTHỰC THI.\nXỬ LÝ.\nBÀN GIAO.',
    profileDesc: 'Có hơn 6 năm kinh nghiệm điều phối dự án và sự kiện trong các mảng corporate event, exhibition, retail, real estate, B2B forum và medical event.',
    process: ['BRIEF','LẬP KẾ HOẠCH','ĐIỀU PHỐI','THỰC THI','BÀN GIAO','BÁO CÁO'],
    timelineLabel: '02 / HÀNH TRÌNH NGHỀ NGHIỆP & DỰ ÁN', timelineDesc: 'Timeline theo dự án, thể hiện những gì tôi đã làm, phạm vi đóng góp và cách vai trò phát triển theo thời gian. Click vào từng dự án để xem chi tiết.',
    projectPlaceholder: 'DỰ ÁN', overview: 'TỔNG QUAN DỰ ÁN', myRole: 'VAI TRÒ CỦA TÔI', handled: 'TÔI PHỤ TRÁCH', flow: 'QUY TRÌNH DỰ ÁN',
    casesLabel: '03 / CASE STUDY TIÊU BIỂU', casesTitle: 'DỰ ÁN TIÊU BIỂU,\nKHÔNG CHỈ LÀ ẢNH THÀNH PHẨM.',
    casesDesc: 'Mỗi case thể hiện bối cảnh dự án, vai trò, phần việc điều phối và quy trình thực thi phía sau kết quả cuối cùng.', viewProject: 'XEM DỰ ÁN',
    capabilitiesLabel: '04 / NĂNG LỰC', contactLabel: '05 / LIÊN HỆ', contactTitle1: 'CÙNG BIẾN', contactTitle2: 'KẾ HOẠCH THÀNH HIỆN THỰC.',
    availability: 'Sẵn sàng cho các cơ hội event / project', location: 'TP. Hồ Chí Minh, Việt Nam', backTop: 'Lên đầu trang ↑'
  }
};

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [openProject, setOpenProject] = useState<string | null>('gamuda');
  const text = ui[lang];
  const t = (value: LocalText) => value[lang];
  const list = (value?: { en: string[]; vi: string[] }) => value?.[lang] ?? [];

  const toggleProject = (project: Project) => {
    if (!project.overview && !project.handled && !project.image) return;
    setOpenProject((current) => current === project.id ? null : project.id);
  };

  const openFromCase = (project: Project) => {
    setOpenProject(project.id);
    requestAnimationFrame(() => document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">THỊNH / 2026</a>
        <div className="nav-right">
          <div className="nav-links"><a href="#timeline">{text.timeline}</a><a href="#about">{text.about}</a><a href="#case-studies">{text.cases}</a><a href="#contact">{text.contact}</a></div>
          <div className="lang-toggle" aria-label="Language switcher"><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'vi' ? 'active' : ''} onClick={() => setLang('vi')}>VI</button></div>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="eyebrow"><span className="dot"/> {text.eyebrow}</div>
        <div className="hero-grid">
          <div><h1>{text.hero1}<br/>{text.hero2}<br/><em>{text.hero3}</em></h1></div>
          <div className="hero-side"><p className="hero-name">ĐINH VŨ TIẾN THỊNH</p><p>{text.heroFields}</p><p className="muted">{text.heroDesc}</p><a className="cta" href="#timeline">{text.explore} <ArrowDown size={18}/></a></div>
        </div>
        <div className="hero-strip"><span>{text.years}</span><span>{text.industries}</span><span>{text.focus}</span></div>
      </section>

      <section id="about" className="intro section-shell">
        <div className="section-label">{text.profileLabel}</div>
        <div className="intro-grid"><h2>{text.profileTitle.split('\n').map((line) => <span key={line}>{line}<br/></span>)}</h2><div><p className="lead">{text.profileDesc}</p><div className="process">{text.process.map((item, index) => <span key={item}>{item}{index < text.process.length - 1 && <b> → </b>}</span>)}</div></div></div>
      </section>

      <section id="timeline" className="timeline section-shell">
        <div className="section-label">{text.timelineLabel}</div><div className="timeline-head"><h2>2020 → 2026</h2><p>{text.timelineDesc}</p></div>
        <div className="timeline-list">{timeline.map((group) => <article className="year-block" key={group.year}><div className="year-rail"><span className="year">{group.year}</span><span className="rail-dot"/></div><div className="year-content"><div className="company"><BriefcaseBusiness size={16}/> {group.company}</div>{group.projects.map((project, index) => { const canOpen = Boolean(project.overview || project.handled || project.image); const isOpen = openProject === project.id; return <div className={`project-wrap ${isOpen ? 'is-open' : ''}`} id={`project-${project.id}`} key={project.id}><button className={`project ${canOpen ? 'project-clickable' : ''}`} onClick={() => toggleProject(project)} aria-expanded={isOpen}><div className="project-num">{String(index + 1).padStart(2,'0')}</div><div className="project-main"><div className="project-meta"><span>{t(project.type)}</span><span>{t(project.role)}</span></div><h3>{project.name}</h3><p>{t(project.detail)}</p></div>{project.image ? <img className="project-thumb" src={project.image} alt={project.name}/> : <div className="project-placeholder">{text.projectPlaceholder}</div>}{canOpen ? (isOpen ? <X className="project-arrow" size={22}/> : <ArrowUpRight className="project-arrow" size={22}/>) : <span/>}</button>{isOpen && <div className="project-expanded">{project.image && <img className="project-hero-image" src={project.image} alt={project.name}/>}<div className="project-detail"><div><span className="detail-label">{text.overview}</span><p>{project.overview ? t(project.overview) : ''}</p></div><div><span className="detail-label">{text.myRole}</span><p>{t(project.role)}</p></div>{project.handled && <div><span className="detail-label">{text.handled}</span><ul>{list(project.handled).map((item) => <li key={item}>{item}</li>)}</ul></div>}{project.flow && <div className="flow-box"><span className="detail-label">{text.flow}</span><p>{t(project.flow)}</p></div>}</div></div>}</div>; })}</div></article>)}</div>
      </section>

      <section className="featured section-shell" id="case-studies">
        <div className="section-label">{text.casesLabel}</div><div className="featured-intro"><h2>{text.casesTitle.split('\n').map((line) => <span key={line}>{line}<br/></span>)}</h2><p>{text.casesDesc}</p></div>
        <div className="case-grid">{caseStudies.map((project, index) => <article className="case-card" key={project.id}><button onClick={() => openFromCase(project)} className="case-button"><div className="case-image-wrap"><img src={project.image} alt={project.name}/><span className="case-index">0{index + 1}</span></div><div className="case-meta"><span>{t(project.type)}</span><span>{t(project.role)}</span></div><h3>{project.name}</h3><p>{project.overview ? t(project.overview) : ''}</p><div className="case-link">{text.viewProject} <ArrowUpRight size={18}/></div></button></article>)}</div>
      </section>

      <section className="capabilities section-shell"><div className="section-label">{text.capabilitiesLabel}</div><div className="cap-grid">{capabilities[lang].map((cap, i) => <div className="cap" key={cap}><span>{String(i+1).padStart(2,'0')}</span><p>{cap}</p></div>)}</div></section>

      <section id="contact" className="contact section-shell">
        <div className="section-label">{text.contactLabel}</div><h2>{text.contactTitle1}<br/><em>{text.contactTitle2}</em></h2>
        <div className="contact-row"><span><CalendarDays size={16}/> {text.availability}</span><span><MapPin size={16}/> {text.location}</span></div>
        <div className="contact-links">
          <a href="tel:+84334012599"><Phone size={18}/><span>0334 012 599</span></a>
          <a href="mailto:davidthinh3.work@gmail.com"><Mail size={18}/><span>davidthinh3.work@gmail.com</span></a>
          <a href="https://www.linkedin.com/in/david-thinh-95472a387" target="_blank" rel="noreferrer"><Linkedin size={18}/><span>LinkedIn</span></a>
        </div>
      </section>

      <footer className="footer section-shell"><span>© 2026 ĐINH VŨ TIẾN THỊNH</span><a href="#top">{text.backTop}</a></footer>
    </main>
  );
}
