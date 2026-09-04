(() => {
  const PROJECTS = {
    gamuda: {
      visual: { type: 'image', src: '/assets/gamuda.jpg' },
      en: {
        purpose: 'Translate the approved Christmas and Tet decoration concepts into real installations across key Gamuda / Celadon City public and residential areas.',
        challenge: 'Different site conditions did not always match the drawing, while several zones had to be coordinated under a fixed seasonal deadline.',
        solution: 'I stayed between the contractor and client, clarified priorities from the drawings, adjusted execution to real site conditions, and tracked installation progress until each area was completed.',
        result: 'Seasonal decoration was delivered on schedule with the intended visual direction maintained across multiple locations.'
      },
      vi: {
        purpose: 'Đưa concept trang trí Giáng Sinh và Tết đã được duyệt thành các hạng mục thi công thực tế tại nhiều khu vực của Gamuda / Celadon City.',
        challenge: 'Điều kiện hiện trường không phải lúc nào cũng khớp hoàn toàn với bản vẽ, trong khi nhiều khu vực phải triển khai đồng thời theo một deadline cố định.',
        solution: 'Tôi đứng giữa nhà thầu và khách hàng, làm rõ các ưu tiên từ bản vẽ, điều chỉnh phương án theo hiện trường thực tế và bám tiến độ cho đến khi từng khu vực hoàn tất.',
        result: 'Các hạng mục trang trí được hoàn thành đúng tiến độ và vẫn giữ được định hướng hình ảnh xuyên suốt nhiều vị trí.'
      }
    },
    prada: {
      visual: { type: 'sprite', position: '0% 0%' },
      en: {
        purpose: 'Deliver a premium exhibition-room setup with the finishing quality and visual precision expected in a luxury-brand environment.',
        challenge: 'The working window was very short, while even small finishing or alignment errors could affect the final handover quality.',
        solution: 'I followed the installation closely, checked finishing details continuously, flagged visual mismatches early and coordinated quick corrections with contractors before handover.',
        result: 'The room was completed on time with a cleaner, more controlled final finish.'
      },
      vi: {
        purpose: 'Hoàn thiện không gian triển lãm với tiêu chuẩn thẩm mỹ và độ chính xác phù hợp môi trường thương hiệu cao cấp.',
        challenge: 'Thời gian thi công rất ngắn trong khi những sai lệch nhỏ về hoàn thiện hoặc căn chỉnh cũng có thể ảnh hưởng chất lượng bàn giao.',
        solution: 'Tôi bám sát quá trình lắp đặt, kiểm tra liên tục các chi tiết hoàn thiện, phát hiện sớm sai lệch hình ảnh và phối hợp nhà thầu chỉnh ngay trước khi bàn giao.',
        result: 'Không gian được hoàn thành đúng thời gian với mức độ hoàn thiện được kiểm soát tốt hơn.'
      }
    },
    tokyo: {
      visual: { type: 'image', src: '/assets/tokyo.jpg' },
      en: {
        purpose: 'Deliver the Tokyo Festival installation at Saigon Centre while meeting the technical and operating requirements of a major shopping mall.',
        challenge: 'The project had multiple dependencies: drawings, technical checks, contractor execution, mall approval, inspection and handover all had to happen in sequence.',
        solution: 'I followed the drawing package and timeline, checked technical details onsite, coordinated contractors with the mall team and supported inspection and acceptance before handover.',
        result: 'The installation moved through the mall approval process smoothly and reached handover without creating a blocker for the next stage.'
      },
      vi: {
        purpose: 'Triển khai khu vực Tokyo Festival tại Saigon Centre đồng thời đáp ứng đầy đủ các yêu cầu kỹ thuật và vận hành của trung tâm thương mại.',
        challenge: 'Dự án có nhiều mắt xích phụ thuộc nhau: bản vẽ, kiểm tra kỹ thuật, thi công, duyệt của mall, nghiệm thu và bàn giao.',
        solution: 'Tôi bám bộ bản vẽ và timeline, kiểm tra kỹ thuật onsite, phối hợp nhà thầu với đội ngũ mall và hỗ trợ nghiệm thu trước khi bàn giao.',
        result: 'Quá trình thi công và nghiệm thu với mall diễn ra mượt, không tạo điểm nghẽn cho giai đoạn tiếp theo.'
      }
    },
    decathlon: {
      visual: { type: 'image', src: '/assets/decathlon.jpg' },
      en: {
        purpose: 'Support the transformation of an empty retail unit into a completed, operational Decathlon store.',
        challenge: 'Several contractors and property stakeholders were involved, and ad-hoc site issues could easily disrupt the sequence of work and final handover.',
        solution: 'I coordinated workstreams, followed daily progress, aligned with mall and property stakeholders, and resolved site issues as they appeared so the overall sequence kept moving.',
        result: 'The project progressed from empty space to completed store with coordinated handover across the involved parties.'
      },
      vi: {
        purpose: 'Hỗ trợ chuyển một mặt bằng trống thành cửa hàng Decathlon hoàn thiện và có thể vận hành.',
        challenge: 'Có nhiều nhà thầu và stakeholder liên quan đến mặt bằng, trong khi các vấn đề phát sinh onsite có thể làm gián đoạn chuỗi công việc và bàn giao.',
        solution: 'Tôi điều phối các hạng mục, theo dõi tiến độ hằng ngày, phối hợp với mall và các bên liên quan, đồng thời xử lý phát sinh ngay khi xuất hiện để giữ toàn bộ chuỗi triển khai luôn chạy.',
        result: 'Dự án đi từ mặt bằng trống đến cửa hàng hoàn thiện với quá trình phối hợp và bàn giao được kiểm soát.'
      }
    },
    keppel: {
      visual: { type: 'sprite', position: '33.333% 0%' },
      en: {
        purpose: 'Install and prepare a recycled-art exhibition while keeping artworks, POSM and event readiness under control.',
        challenge: 'The project combined physical installation with detailed asset tracking, so setup quality and item accuracy both mattered before live event day.',
        solution: 'I supervised installation against the drawings, logged artworks and POSM, kept the setup organized and supported the Account Manager as the project moved into event operations.',
        result: 'The exhibition was handed over in an organized state and ready for live-event use.'
      },
      vi: {
        purpose: 'Thi công và chuẩn bị triển lãm nghệ thuật tái chế, đồng thời kiểm soát tác phẩm, POSM và mức độ sẵn sàng cho ngày sự kiện.',
        challenge: 'Dự án vừa có phần thi công vật lý vừa có yêu cầu kiểm kê hiện vật chi tiết, nên cả chất lượng setup lẫn độ chính xác của từng item đều quan trọng.',
        solution: 'Tôi giám sát lắp đặt theo bản vẽ, kiểm kê tác phẩm và POSM, giữ khu vực setup có tổ chức và hỗ trợ Account Manager khi dự án chuyển sang vận hành sự kiện.',
        result: 'Triển lãm được bàn giao trong trạng thái gọn, có kiểm soát và sẵn sàng cho live event.'
      }
    },
    forbes: {
      visual: { type: 'image', src: '/assets/forbes.jpg' },
      en: {
        purpose: 'Support the delivery of Forbes Business Forum from construction readiness through live-event operations.',
        challenge: 'Construction, manpower and event operations were happening in parallel, while the Account team needed reliable onsite support to keep the broader program moving.',
        solution: 'I supervised build items, coordinated helpers, followed onsite progress and stayed close to the AAM and Manager so practical issues could be handled quickly.',
        result: 'The event team had a stable onsite execution layer, helping the forum run more smoothly from setup into live delivery.'
      },
      vi: {
        purpose: 'Hỗ trợ triển khai Forbes Business Forum từ giai đoạn chuẩn bị thi công đến vận hành chương trình trực tiếp.',
        challenge: 'Thi công, manpower và vận hành event diễn ra song song, trong khi team Account cần một lớp hỗ trợ onsite ổn định để giữ toàn bộ chương trình chạy.',
        solution: 'Tôi giám sát các hạng mục build, điều phối helper, bám tiến độ onsite và phối hợp sát với AAM / Manager để xử lý nhanh các vấn đề thực tế.',
        result: 'Team có một lớp vận hành onsite ổn định hơn, giúp chương trình chuyển từ setup sang live event mượt hơn.'
      }
    },
    lumi: {
      visual: { type: 'sprite', position: '0% 33.333%' },
      en: {
        purpose: 'Deliver a polished real-estate event environment and protect the guest experience from build-up through live show and dismantling.',
        challenge: 'Major construction had to be completed overnight, then the team had to switch immediately into backstage, guest-flow and key-moment operations.',
        solution: 'I followed critical build items, stayed close to the Account Manager, supported backstage and guest routing, watched timing-sensitive moments and remained through post-event dismantling.',
        result: 'The project moved from overnight construction into live operations with minimal disruption to the guest-facing program.'
      },
      vi: {
        purpose: 'Tạo một không gian sự kiện bất động sản chỉn chu và giữ trải nghiệm khách mời xuyên suốt từ thi công, live show đến tháo dỡ.',
        challenge: 'Các hạng mục lớn phải hoàn thành xuyên đêm, sau đó team phải chuyển ngay sang backstage, phân luồng khách và vận hành key moment.',
        solution: 'Tôi bám các hạng mục thi công quan trọng, phối hợp sát với Account Manager, hỗ trợ backstage và luồng khách, theo dõi các thời điểm nhạy về timing và tiếp tục đến giai đoạn tháo dỡ.',
        result: 'Dự án chuyển từ thi công xuyên đêm sang live operation mà không làm gián đoạn trải nghiệm phía khách mời.'
      }
    },
    sycamore: {
      visual: { type: 'sprite', position: '33.333% 33.333%' },
      en: {
        purpose: 'Coordinate a fast-turnaround real-estate event while keeping backstage readiness, guest movement and show timing under control.',
        challenge: 'The overnight build left little recovery time before showtime, so construction completion and live-event readiness had to overlap tightly.',
        solution: 'I stayed close to the build, synchronized priorities with the Account Manager, checked backstage readiness, supported guest routing and focused on timing around the key show moments.',
        result: 'The event transitioned cleanly from overnight setup to live show and then into post-event dismantling.'
      },
      vi: {
        purpose: 'Điều phối một sự kiện bất động sản có tốc độ triển khai cao, đồng thời giữ backstage, luồng khách và timing chương trình trong tầm kiểm soát.',
        challenge: 'Thi công xuyên đêm gần như không có khoảng nghỉ trước giờ chạy chương trình, nên hoàn thiện build và chuẩn bị live event phải gối sát nhau.',
        solution: 'Tôi bám quá trình build, đồng bộ ưu tiên với Account Manager, kiểm tra backstage, hỗ trợ phân luồng khách và tập trung vào timing của các key moment.',
        result: 'Sự kiện chuyển mượt từ setup xuyên đêm sang live show rồi tiếp tục đến tháo dỡ sau chương trình.'
      }
    },
    orchard: {
      visual: { type: 'sprite', position: '66.667% 33.333%' },
      en: {
        purpose: 'Support the complete lifecycle of a polished real-estate event, from overnight construction to key live moments and close-out.',
        challenge: 'A compressed preparation window meant the physical build, backstage readiness and guest-facing program all had very little room for delay.',
        solution: 'I followed overnight construction, worked beside the Account Manager, managed backstage and guest-flow tasks and stayed focused on the exact moments where timing affected the audience experience.',
        result: 'The event remained controlled through setup, showtime and dismantling despite the compressed schedule.'
      },
      vi: {
        purpose: 'Hỗ trợ toàn bộ vòng đời của một sự kiện bất động sản chỉn chu, từ thi công xuyên đêm đến key moment và close-out.',
        challenge: 'Thời gian chuẩn bị nén khiến phần thi công, backstage và chương trình phía khách mời gần như không có dư địa để chậm.',
        solution: 'Tôi bám thi công xuyên đêm, phối hợp cạnh Account Manager, phụ trách backstage và luồng khách, đồng thời tập trung vào các thời điểm mà timing ảnh hưởng trực tiếp đến trải nghiệm khán giả.',
        result: 'Sự kiện vẫn được kiểm soát xuyên suốt setup, showtime và tháo dỡ dù timeline rất gấp.'
      }
    },
    blum: {
      visual: { type: 'sprite', position: '100% 33.333%' },
      en: {
        purpose: 'Deliver a clean and functional B2B exhibition booth ready for client use.',
        challenge: 'A booth project looks compact, but the setup window, contractor sequence and finishing details still had to be tightly controlled.',
        solution: 'I coordinated contractors, followed installation priorities, checked onsite progress and stayed through finishing and handover.',
        result: 'The booth was delivered ready for operation with a controlled final finish.'
      },
      vi: {
        purpose: 'Bàn giao một gian hàng triển lãm B2B sạch, hoàn chỉnh và sẵn sàng sử dụng.',
        challenge: 'Quy mô gian hàng gọn nhưng thời gian setup, trình tự nhà thầu và chi tiết hoàn thiện vẫn cần được kiểm soát chặt.',
        solution: 'Tôi điều phối nhà thầu, bám các ưu tiên lắp đặt, kiểm tra tiến độ onsite và theo đến giai đoạn hoàn thiện, bàn giao.',
        result: 'Gian hàng được bàn giao trong trạng thái sẵn sàng vận hành và có mức độ hoàn thiện được kiểm soát.'
      }
    },
    geso: {
      visual: { type: 'none' },
      en: {
        purpose: 'Support a business forum and booth delivery with a lean onsite team.',
        challenge: 'With fewer people onsite, each person had to carry more ownership and priorities needed to stay very clear.',
        solution: 'I kept tasks simple, followed the setup timeline, aligned the small team around immediate priorities and supported issue handling as the event moved forward.',
        result: 'The team maintained delivery momentum despite a leaner operating structure.'
      },
      vi: {
        purpose: 'Hỗ trợ triển khai business forum và booth với một team onsite tinh gọn.',
        challenge: 'Khi số người onsite ít hơn, mỗi người phải sở hữu nhiều đầu việc hơn và các ưu tiên cần cực kỳ rõ ràng.',
        solution: 'Tôi giữ cách điều phối đơn giản, bám timeline setup, đồng bộ team nhỏ theo các ưu tiên trước mắt và hỗ trợ xử lý phát sinh khi chương trình triển khai.',
        result: 'Team vẫn duy trì được nhịp bàn giao dù cấu trúc vận hành gọn hơn.'
      }
    },
    gladia: {
      visual: { type: 'sprite', position: '0% 66.667%' },
      en: {
        purpose: 'Coordinate setup and live execution for a real-estate kick-off event.',
        challenge: 'Setup completion, backstage readiness and live-event priorities had to remain aligned under a compressed timeline.',
        solution: 'I tracked setup workstreams, followed the event timeline, supported backstage and reacted quickly to onsite issues so the program could continue without unnecessary interruption.',
        result: 'The kick-off moved into live delivery with the key operational workstreams kept on track.'
      },
      vi: {
        purpose: 'Điều phối setup và live execution cho một sự kiện kick-off bất động sản.',
        challenge: 'Hoàn thiện setup, backstage và các ưu tiên chạy chương trình phải luôn đồng bộ trong một timeline ngắn.',
        solution: 'Tôi bám các workstream setup, theo timeline chương trình, hỗ trợ backstage và phản ứng nhanh với phát sinh onsite để chương trình không bị gián đoạn không cần thiết.',
        result: 'Kick-off chuyển sang live delivery với các đầu việc vận hành quan trọng vẫn bám đúng tiến độ.'
      }
    },
    panasonic: {
      visual: { type: 'sprite', position: '33.333% 66.667%' },
      en: {
        purpose: 'Deliver Panasonic’s B2B exhibition booth at DERGO ready for activation.',
        challenge: 'Vendor timing, technical checks and finishing quality all had to converge before a fixed opening time.',
        solution: 'I coordinated booth requirements with vendors, tracked progress, followed technical checks and stayed close to onsite issue handling until delivery.',
        result: 'The booth was completed and handed over in time for the B2B exhibition environment.'
      },
      vi: {
        purpose: 'Hoàn thiện gian hàng B2B của Panasonic tại DERGO và đưa vào trạng thái sẵn sàng activation.',
        challenge: 'Tiến độ vendor, kiểm tra kỹ thuật và chất lượng hoàn thiện phải cùng hội tụ trước một thời điểm mở cửa cố định.',
        solution: 'Tôi điều phối yêu cầu gian hàng với vendor, bám tiến độ, theo các kiểm tra kỹ thuật và xử lý phát sinh onsite đến khi bàn giao.',
        result: 'Gian hàng được hoàn tất và bàn giao đúng thời điểm cho môi trường triển lãm B2B.'
      }
    },
    mocchau: {
      visual: { type: 'sprite', position: '66.667% 66.667%' },
      en: {
        purpose: 'Prepare and operate a consumer-facing product introduction at AEON Mall Tân Phú.',
        challenge: 'The activation had to follow mall requirements while coordinating vendors, launch readiness and live interaction with the public.',
        solution: 'I followed mall requirements and preparation timing, coordinated the launch area and vendors, then supported onsite adjustments once the product-introduction activity went live.',
        result: 'The activation opened in an organized state and maintained smooth onsite operation during the product introduction.'
      },
      vi: {
        purpose: 'Chuẩn bị và vận hành hoạt động giới thiệu sản phẩm trực tiếp với người tiêu dùng tại AEON Mall Tân Phú.',
        challenge: 'Activation phải tuân thủ yêu cầu của mall trong khi vẫn phải đồng bộ vendor, trạng thái sẵn sàng launch và hoạt động trực tiếp với khách.',
        solution: 'Tôi bám yêu cầu mall và thời gian chuẩn bị, điều phối khu vực launch và vendor, sau đó hỗ trợ các điều chỉnh onsite khi hoạt động giới thiệu sản phẩm bắt đầu.',
        result: 'Activation mở cửa trong trạng thái có tổ chức và duy trì vận hành onsite ổn định trong quá trình giới thiệu sản phẩm.'
      }
    },
    gintell: {
      visual: { type: 'none' },
      en: {
        purpose: 'Complete an independent mall-booth dismantling project from paperwork and sourcing through site handover.',
        challenge: 'Unlike team-based event work, I owned the entire chain myself: documentation, vendor selection, mall procedure, onsite supervision and final handover.',
        solution: 'I prepared the required documents, sourced the vendor, joined mall meetings, aligned site procedures, supervised dismantling and closed the project with final handover.',
        result: 'The project was completed end-to-end under my direct coordination, demonstrating clear independent ownership.'
      },
      vi: {
        purpose: 'Hoàn thành một dự án tháo dỡ booth tại mall theo hình thức độc lập, từ hồ sơ và tìm vendor đến bàn giao mặt bằng.',
        challenge: 'Khác với các dự án event có team lớn, tôi tự sở hữu toàn bộ chuỗi: hồ sơ, lựa chọn vendor, thủ tục mall, giám sát onsite và bàn giao cuối.',
        solution: 'Tôi chuẩn bị hồ sơ, tìm vendor, tham gia họp với mall, thống nhất quy trình hiện trường, giám sát tháo dỡ và đóng dự án bằng bàn giao mặt bằng.',
        result: 'Dự án được hoàn thành end-to-end dưới sự điều phối trực tiếp của tôi, thể hiện rõ ownership độc lập.'
      }
    },
    medical: {
      visual: { type: 'medical' },
      en: {
        purpose: 'Coordinate scientific and pharmaceutical events at Tâm Anh Research Institute from preparation through post-event completion.',
        challenge: 'Medical events add regulatory, scientific-content and expert requirements on top of normal event operations, with many stakeholders needing accurate coordination.',
        solution: 'I use a structured workflow covering regulatory documents, expert contracts, program requirements, POSM briefing, vendor coordination, event execution and post-event reporting.',
        result: 'My role expanded from primarily onsite execution into a broader end-to-end project coordination workflow for medical events.'
      },
      vi: {
        purpose: 'Điều phối các chương trình khoa học và dược phẩm tại Viện Nghiên cứu Tâm Anh từ giai đoạn chuẩn bị đến hoàn tất sau sự kiện.',
        challenge: 'Medical event có thêm yêu cầu về hồ sơ, nội dung khoa học và chuyên gia bên cạnh vận hành sự kiện thông thường, với nhiều stakeholder cần phối hợp chính xác.',
        solution: 'Tôi sử dụng workflow có cấu trúc gồm hồ sơ xin phép, hợp đồng chuyên gia, yêu cầu chương trình, briefing POSM, điều phối vendor, vận hành sự kiện và báo cáo sau chương trình.',
        result: 'Vai trò của tôi mở rộng từ thực thi onsite sang điều phối dự án end-to-end đầy đủ hơn trong môi trường medical event.'
      }
    }
  };

  const LABELS = {
    en: { purpose: 'PROJECT PURPOSE', role: 'MY ROLE', challenge: 'CHALLENGE', solution: 'HOW I HANDLED IT', result: 'RESULT', close: 'CLOSE', case: 'PROJECT CASE' },
    vi: { purpose: 'MỤC ĐÍCH DỰ ÁN', role: 'VAI TRÒ CỦA TÔI', challenge: 'THỬ THÁCH', solution: 'CÁCH TÔI XỬ LÝ', result: 'KẾT QUẢ', close: 'ĐÓNG', case: 'PROJECT CASE' }
  };

  let modal;
  let lastTrigger = null;

  function currentLang() {
    const active = document.querySelector('.lang-toggle button.active');
    return active && active.textContent.trim().toLowerCase() === 'vi' ? 'vi' : 'en';
  }

  function escapeHtml(value = '') {
    return value.replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
  }

  function visualMarkup(projectId, visual, name) {
    if (!visual || visual.type === 'none') {
      return `<div class="tlm-visual tlm-visual--type"><span>${escapeHtml(name)}</span><strong>${projectId.toUpperCase()}</strong></div>`;
    }
    if (visual.type === 'medical') {
      return `<div class="tlm-visual tlm-visual--medical"><div class="tlm-medical-orb"></div><span>TÂM ANH RESEARCH INSTITUTE</span><strong>MEDICAL<br/>EVENTS</strong></div>`;
    }
    if (visual.type === 'sprite') {
      return `<div class="tlm-visual tlm-visual--sprite" style="background-position:${visual.position}"></div>`;
    }
    return `<div class="tlm-visual" style="background-image:url('${visual.src}')"></div>`;
  }

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'tlm-backdrop';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `<div class="tlm-shell" role="dialog" aria-modal="true" aria-labelledby="tlm-title"><button class="tlm-close" type="button" aria-label="Close"><span></span><span></span></button><div class="tlm-content"></div></div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.closest('.tlm-close')) closeModal();
    });
    return modal;
  }

  function openModal(projectId, trigger) {
    const project = PROJECTS[projectId];
    if (!project) return;
    const lang = currentLang();
    const labels = LABELS[lang];
    const copy = project[lang];
    const row = trigger.closest('.project');
    const name = row?.querySelector('h3')?.textContent?.trim() || projectId;
    const role = row?.querySelector('.project-meta span:nth-child(2)')?.textContent?.trim() || '';
    const type = row?.querySelector('.project-meta span:first-child')?.textContent?.trim() || '';
    const wrap = ensureModal();
    const content = wrap.querySelector('.tlm-content');
    content.innerHTML = `
      <div class="tlm-media">${visualMarkup(projectId, project.visual, name)}<div class="tlm-media-caption"><span>${escapeHtml(labels.case)}</span><span>${escapeHtml(type)}</span></div></div>
      <div class="tlm-copy">
        <div class="tlm-kicker">${escapeHtml(labels.case)} · ${escapeHtml(type)}</div>
        <h2 id="tlm-title">${escapeHtml(name)}</h2>
        <div class="tlm-role"><span>${escapeHtml(labels.role)}</span><strong>${escapeHtml(role)}</strong></div>
        <div class="tlm-grid">
          <section class="tlm-block tlm-block--purpose"><span>${escapeHtml(labels.purpose)}</span><p>${escapeHtml(copy.purpose)}</p></section>
          <section class="tlm-block tlm-block--challenge"><span>${escapeHtml(labels.challenge)}</span><p>${escapeHtml(copy.challenge)}</p></section>
          <section class="tlm-block tlm-block--solution"><span>${escapeHtml(labels.solution)}</span><p>${escapeHtml(copy.solution)}</p></section>
          <section class="tlm-block tlm-block--result"><span>${escapeHtml(labels.result)}</span><p>${escapeHtml(copy.result)}</p></section>
        </div>
      </div>`;
    lastTrigger = trigger;
    document.body.classList.add('tlm-open');
    wrap.classList.add('is-visible');
    wrap.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => wrap.querySelector('.tlm-close')?.focus());
  }

  function closeModal() {
    if (!modal || !modal.classList.contains('is-visible')) return;
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('tlm-open');
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.addEventListener('click', e => {
    const trigger = e.target.closest('#timeline .project');
    if (!trigger) return;
    const wrap = trigger.closest('.project-wrap');
    const projectId = wrap?.id?.replace('project-', '');
    if (!projectId || !PROJECTS[projectId]) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    openModal(projectId, trigger);
  }, true);
})();