    const practiceItems = [
      {
        title: "Writing Warm-up",
        level: "Level 1",
        time: "5-10 min",
        type: "lines",
        focus: "Fine motor control and clean pen movement.",
        drill: "Write the alphabet, your name, and a few random sentences slowly enough to stay clean, then faster while keeping control."
      },
      {
        title: "Line Stacks",
        level: "Level 1",
        time: "10 min",
        type: "lines",
        focus: "Straight, curved, confident one-stroke lines.",
        drill: "Fill rows with parallel straight lines, then curved lines. Keep spacing even and draw each stroke in one committed motion."
      },
      {
        title: "Circles and Ellipses",
        level: "Level 1",
        time: "10 min",
        type: "circles",
        focus: "Roundness, rotation, and ellipse accuracy.",
        drill: "Visualize the circle first, draw it in one motion, then rotate it into ellipses at different angles."
      },
      {
        title: "Rotating Squares",
        level: "Level 1",
        time: "10 min",
        type: "boxes",
        focus: "Boxes in different orientations.",
        drill: "Draw a square, mark its center with an X, then redraw it gradually rotated until you complete a 180-degree turn."
      },
      {
        title: "Ribbons",
        level: "Level 1",
        time: "10-15 min",
        type: "ribbon",
        focus: "Flowing 3D forms with believable volume.",
        drill: "Draw a flowing line, duplicate it with an offset, then connect the sides so the ribbon twists through space."
      },
      {
        title: "Shape Extrusion",
        level: "Level 1",
        time: "10-15 min",
        type: "extrude",
        focus: "Turning flat shapes into chunky 3D forms.",
        drill: "Draw any simple 2D shape or letter, then add depth and connect the corners to make it feel solid."
      },
      {
        title: "Symmetry",
        level: "Level 2",
        time: "10 min",
        type: "mirror",
        focus: "Accurate mirrored curves and straights.",
        drill: "Draw an irregular shape on one side of a center line, then mirror it on the other side as closely as possible."
      },
      {
        title: "Shape Matching",
        level: "Level 2",
        time: "10 min",
        type: "shapes",
        focus: "Observation and proportion matching.",
        drill: "Draw any random shape, then duplicate it next to the original. Compare angles, spacing, and silhouette."
      },
      {
        title: "Silhouettes",
        level: "Level 2",
        time: "10-15 min",
        type: "silhouette",
        focus: "Readable outer shape without internal detail.",
        drill: "Use a reference and draw only the outline of a character, animal, vehicle, or object. No interior lines."
      },
      {
        title: "Symmetry in Perspective",
        level: "Level 2",
        time: "15 min",
        type: "perspective",
        focus: "Mirrored design inside foreshortened space.",
        drill: "Draw a square in perspective, then place a symmetrical design inside it so both halves match the perspective."
      },
      {
        title: "Cylinder Rotations",
        level: "Level 3",
        time: "15 min",
        type: "cylinder",
        focus: "Ellipse changes across views.",
        drill: "Draw the same cylinder from top, side, three-quarter, and foreshortened angles. Watch how the ellipses open and close."
      },
      {
        title: "Boxes on a Horizon",
        level: "Level 3",
        time: "15 min",
        type: "boxes",
        focus: "Perspective boxes tied to one horizon.",
        drill: "Place a horizon line, then draw boxes at different positions and angles while keeping them related to that horizon."
      },
      {
        title: "Boxes Without Horizon",
        level: "Level 3",
        time: "15 min",
        type: "boxes",
        focus: "Perspective from imagination.",
        drill: "Draw boxes at different orientations first, then add the horizon afterward to check how consistent your perspective was."
      },
      {
        title: "Box Storage Room",
        level: "Level 3",
        time: "15-20 min",
        type: "boxes",
        focus: "Multiple objects relating in 3D space.",
        drill: "Stack boxes beside, behind, and on top of each other. Make overlaps, scale, and perspective feel convincing."
      },
      {
        title: "Box Slicing",
        level: "Level 4",
        time: "15 min",
        type: "slice",
        focus: "Cutting forms with angled planes.",
        drill: "Draw a box and slice pieces off at different angles. Show the new cut face clearly."
      },
      {
        title: "Box Extrusion",
        level: "Level 4",
        time: "15 min",
        type: "extrude",
        focus: "Growing complexity from simple forms.",
        drill: "Pick one face of a box and pull it outward into a new volume. Keep the extension aligned in perspective."
      },
      {
        title: "Volume Bending",
        level: "Level 4",
        time: "15 min",
        type: "bend",
        focus: "Bending boxes or cylinders without losing solidity.",
        drill: "Take a straight cylinder or box and bend it into a curved form while keeping the cross-sections believable."
      },
      {
        title: "Beveling",
        level: "Level 4",
        time: "15 min",
        type: "bevel",
        focus: "Softening hard edges into rounded forms.",
        drill: "Take boxes, cylinders, or mixed forms and bevel some or all of their edges so they feel rounded and dimensional."
      },
      {
        title: "3D Blobs",
        level: "Level 4",
        time: "15 min",
        type: "blob",
        focus: "Organic masses that still feel solid.",
        drill: "Draw freeform cloud, rock, or creature-like masses. Use contour, overlap, and light logic to make them feel 3D."
      },
      {
        title: "Construct a Real Object",
        level: "Level 4",
        time: "20 min",
        type: "construct",
        focus: "Combining boxes, cylinders, slices, bevels, and blobs.",
        drill: "Choose a car, animal, furniture piece, or tool and build it from the forms practiced in the earlier exercises."
      }
    ];

    const palettes = [
      ["#06d6a0", "#118ab2", "#16202d"],
      ["#ef476f", "#ffd166", "#16202d"],
      ["#118ab2", "#ff6b4a", "#16202d"],
      ["#ffd166", "#06d6a0", "#16202d"],
      ["#ff6b4a", "#118ab2", "#16202d"],
      ["#06a99a", "#ef476f", "#16202d"]
    ];

    const memoryStorage = {};
    const storage = {
      get(key) {
        try {
          return localStorage.getItem(key) ?? memoryStorage[key] ?? null;
        } catch {
          return memoryStorage[key] ?? null;
        }
      },
      set(key, value) {
        memoryStorage[key] = value;
        try {
          localStorage.setItem(key, value);
        } catch {
          return false;
        }
        return true;
      }
    };

    function artForExercise(exercise, colors) {
      const templates = {
        lines: `<path d="M16 34c24-18 49 17 88-5" stroke="${colors[0]}" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M16 58h88" stroke="${colors[1]}" stroke-width="8" stroke-linecap="round"/><path d="M16 82c24-8 49 8 88-5" stroke="#ffffff" stroke-width="8" stroke-linecap="round" fill="none"/>`,
        circles: `<circle cx="45" cy="57" r="28" fill="${colors[0]}"/><ellipse cx="78" cy="67" rx="31" ry="14" fill="${colors[1]}"/><path d="M23 25c23-13 53-10 75 8" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        boxes: `<path d="M25 44 60 24l35 20-35 20z" fill="${colors[1]}"/><path d="M25 44v39l35 21V64z" fill="${colors[0]}"/><path d="M95 44v39l-35 21V64z" fill="#ffffff" opacity=".9"/><path d="M25 44 60 64l35-20M60 64v40" stroke="${colors[2]}" stroke-width="4" opacity=".5"/>`,
        ribbon: `<path d="M19 40c30-32 43 28 82 2" stroke="${colors[0]}" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M19 72c30-32 43 28 82 2" stroke="${colors[1]}" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M20 40c22 17 18 51 0 32M101 42c-20 17-18 49 0 32" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>`,
        extrude: `<path d="M28 42 62 23l35 19v39L62 101 28 81z" fill="${colors[0]}"/><path d="M62 23v39l35-20" fill="${colors[1]}" opacity=".86"/><path d="M62 62v39M28 42l34 20 35-20" stroke="${colors[2]}" stroke-width="4" opacity=".45"/>`,
        mirror: `<path d="M58 17v86" stroke="#ffffff" stroke-width="5" stroke-dasharray="7 8" opacity=".85"/><path d="M51 28c-22 8-31 26-22 44 5 10 16 18 22 21z" fill="${colors[0]}"/><path d="M65 28c22 8 31 26 22 44-5 10-16 18-22 21z" fill="${colors[1]}"/>`,
        shapes: `<rect x="17" y="48" width="42" height="42" rx="7" fill="${colors[0]}"/><path d="M71 30h31v31H71z" fill="${colors[1]}"/><path d="M69 70h35l-18 31z" fill="#ffffff" opacity=".94"/>`,
        silhouette: `<path d="M40 97c-8-17 4-26 2-40-2-20 12-36 30-29 19 7 25 29 13 45 12 3 15 14 8 24z" fill="${colors[0]}"/><circle cx="54" cy="31" r="13" fill="${colors[1]}"/><path d="M34 96h62" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity=".8"/>`,
        perspective: `<path d="M22 38 98 22v76L22 82z" fill="${colors[0]}" opacity=".92"/><path d="M60 30v60M22 60h76" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity=".85"/><path d="M44 50c-12 9-12 20 0 29M76 43c12 8 12 29 0 37" stroke="${colors[2]}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".48"/>`,
        cylinder: `<path d="M28 39c0-12 64-12 64 0v43c0 13-64 13-64 0z" fill="${colors[0]}"/><ellipse cx="60" cy="39" rx="32" ry="12" fill="${colors[1]}"/><path d="M28 82c0 13 64 13 64 0" stroke="#ffffff" stroke-width="5" opacity=".8" fill="none"/><path d="M38 39v43M82 39v43" stroke="${colors[2]}" stroke-width="4" opacity=".38"/>`,
        slice: `<path d="M24 42 62 23l36 21-36 21z" fill="${colors[1]}"/><path d="M24 42v42l38 20V65z" fill="${colors[0]}"/><path d="M98 44 82 76 62 104V65z" fill="#ffffff" opacity=".9"/><path d="M45 53 87 35M45 53l17 52" stroke="${colors[2]}" stroke-width="5" opacity=".5"/>`,
        bend: `<path d="M25 82c11-43 46-61 70-45 13 9 11 28-3 34-18 8-35 3-48 24" stroke="${colors[0]}" stroke-width="23" stroke-linecap="round" fill="none"/><path d="M27 81c18 12 31 17 47 16" stroke="${colors[1]}" stroke-width="7" stroke-linecap="round" fill="none"/>`,
        bevel: `<path d="M31 43 61 26l31 17v34L61 94 31 77z" fill="${colors[0]}"/><path d="M43 48 61 38l19 10v22L61 81 43 70z" fill="${colors[1]}"/><path d="M31 43 61 61l31-18M61 61v33" stroke="#ffffff" stroke-width="4" opacity=".65"/>`,
        blob: `<path d="M37 88c-17-11-14-37 4-42 2-22 33-28 45-10 21-2 29 27 13 40 5 18-21 33-38 19-8 6-17 4-24-7z" fill="${colors[0]}"/><path d="M39 58c13-12 31-18 50-10" stroke="${colors[1]}" stroke-width="7" stroke-linecap="round" opacity=".9" fill="none"/>`,
        construct: `<path d="M18 72h61l14 16H31z" fill="${colors[0]}"/><path d="M35 49h35l20 23H18z" fill="${colors[1]}"/><circle cx="39" cy="90" r="9" fill="#ffffff"/><circle cx="77" cy="90" r="9" fill="#ffffff"/><path d="M30 72h60" stroke="${colors[2]}" stroke-width="5" opacity=".45"/>`
      };

      return `
        <svg class="drill-art-svg" viewBox="0 0 120 120" role="img" aria-label="${exercise.title}">
          ${templates[exercise.type] || templates.shapes}
        </svg>`;
    }

    const results = document.getElementById("results");
    const pickButton = document.getElementById("pickButton");
    const pickButtonLabel = document.getElementById("pickButtonLabel");
    const weaknessButton = document.getElementById("weaknessButton");
    const levelButtons = [...document.querySelectorAll(".level-button")];
    const countButtons = [...document.querySelectorAll(".count-button")];
    const levelStorageKey = "practice-picker-selected-levels";
    const countStorageKey = "practice-picker-drill-count";
    const weaknessStorageKey = "practice-picker-weakness-mode";

    function readStoredLevels() {
      try {
        const storedLevels = JSON.parse(storage.get(levelStorageKey));
        if (!Array.isArray(storedLevels)) return null;
        return storedLevels.filter(level => typeof level === "string");
      } catch {
        return null;
      }
    }

    function selectedLevels() {
      return levelButtons
        .filter(levelButton => levelButton.getAttribute("aria-pressed") === "true")
        .map(levelButton => levelButton.dataset.level);
    }

    function storeSelectedLevels() {
      storage.set(levelStorageKey, JSON.stringify(selectedLevels()));
    }

    function restoreSelectedLevels() {
      const storedLevels = readStoredLevels();
      if (!storedLevels) return;

      levelButtons.forEach(levelButton => {
        levelButton.setAttribute("aria-pressed", String(storedLevels.includes(levelButton.dataset.level)));
      });
    }

    function selectedDrillCount() {
      const activeButton = countButtons.find(countButton => countButton.getAttribute("aria-pressed") === "true");
      return activeButton ? Number(activeButton.dataset.count) : 3;
    }

    function drillWord(count) {
      return count === 1 ? "drill" : "drills";
    }

    function updatePickButtonLabel() {
      const count = selectedDrillCount();
      const modePrefix = weaknessModeEnabled() ? "Pick weak" : "Pick";
      pickButtonLabel.textContent = `${modePrefix} ${count} ${drillWord(count)}`;
    }

    function setDrillCount(count) {
      countButtons.forEach(countButton => {
        countButton.setAttribute("aria-pressed", String(Number(countButton.dataset.count) === count));
      });
      storage.set(countStorageKey, String(count));
      updatePickButtonLabel();
    }

    function restoreDrillCount() {
      const storedCount = Number(storage.get(countStorageKey));
      if (!Number.isInteger(storedCount) || storedCount < 1 || storedCount > 6) {
        updatePickButtonLabel();
        return;
      }
      setDrillCount(storedCount);
    }

    function weaknessModeEnabled() {
      return weaknessButton.getAttribute("aria-pressed") === "true";
    }

    function setWeaknessMode(enabled) {
      weaknessButton.setAttribute("aria-pressed", String(enabled));
      pickButton.dataset.mode = enabled ? "weakness" : "random";
      storage.set(weaknessStorageKey, String(enabled));
      updatePickButtonLabel();
    }

    function restoreWeaknessMode() {
      setWeaknessMode(storage.get(weaknessStorageKey) === "true");
    }

    function activePracticeItems() {
      const levels = selectedLevels();
      return practiceItems.filter(exercise => levels.includes(exercise.level));
    }

    function shuffleItems(items) {
      const pool = [...items];
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      return pool;
    }

    function pickWeaknessDrills(pool) {
      const stats = readDrillStats();
      const groupedByCount = pool.reduce((groups, exercise) => {
        const count = stats[exercise.title] || 0;
        if (!groups.has(count)) groups.set(count, []);
        groups.get(count).push(exercise);
        return groups;
      }, new Map());

      return [...groupedByCount.keys()]
        .sort((first, second) => first - second)
        .flatMap(count => shuffleItems(groupedByCount.get(count)));
    }

    function pickDrills() {
      const pool = activePracticeItems();
      const orderedPool = weaknessModeEnabled() ? pickWeaknessDrills(pool) : shuffleItems(pool);
      return orderedPool.slice(0, Math.min(selectedDrillCount(), orderedPool.length));
    }

    function renderEmptyState() {
      results.className = "empty-state";
      results.innerHTML = `
        <div class="empty-content">
          <svg class="empty-art" viewBox="0 0 420 260" fill="none" aria-hidden="true">
            <path d="M78 86h264" stroke="#118ab2" stroke-width="10" stroke-linecap="round" opacity=".85"/>
            <path d="M112 132h196" stroke="#06d6a0" stroke-width="10" stroke-linecap="round" opacity=".85"/>
            <path d="M154 178h112" stroke="#ffd166" stroke-width="10" stroke-linecap="round" opacity=".85"/>
            <circle cx="100" cy="86" r="18" fill="#ef476f" opacity=".9"/>
            <circle cx="320" cy="178" r="18" fill="#16202d" opacity=".9"/>
          </svg>
          <h3 class="empty-title">Choose at least one level.</h3>
          <p class="empty-description">The picker will use only checked levels.</p>
        </div>`;
    }

    function renderDrills() {
      const picks = pickDrills();
      currentDrills = picks;
      if (picks.length === 0) {
        renderEmptyState();
        return picks;
      }

      results.className = "drill-board";
      results.innerHTML = picks.map((exercise, index) => {
        const colors = palettes[index % palettes.length];
        return `
          <article class="drill-card">
            <div class="drill-topline">
              <span class="drill-index">${index + 1}</span>
              <div class="drill-meta">
                <span>${exercise.level}</span>
                <span>${exercise.time}</span>
              </div>
            </div>
            <div class="drill-art">${artForExercise(exercise, colors)}</div>
            <h3 class="drill-title">${exercise.title}</h3>
            <p class="drill-focus">${exercise.focus}</p>
            <div class="drill-detail"><span class="drill-detail-label">Do this:</span> ${exercise.drill}</div>
          </article>`;
      }).join("");

      return picks;
    }

    const streakStorageKey = "practice-picker-streak";
    const streakEl = document.getElementById("streak");
    const flameIcon = streakEl.querySelector(".streak-flame");
    const streakCountEl = document.getElementById("streakCount");
    const streakUnitEl = document.getElementById("streakUnit");
    const streakBestEl = document.getElementById("streakBest");
    const habitGrid = document.getElementById("habitGrid");
    const habitYear = 2026;
    const drillStatsStorageKey = "practice-picker-drill-stats";
    const statsList = document.getElementById("statsList");
    const statsTotal = document.getElementById("statsTotal");
    let currentDrills = [];

    function readDrillStats() {
      try {
        const data = JSON.parse(storage.get(drillStatsStorageKey));
        if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("empty");
        return practiceItems.reduce((stats, exercise) => {
          const count = Number(data[exercise.title]);
          stats[exercise.title] = Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
          return stats;
        }, {});
      } catch {
        return practiceItems.reduce((stats, exercise) => {
          stats[exercise.title] = 0;
          return stats;
        }, {});
      }
    }

    function writeDrillStats(stats) {
      storage.set(drillStatsStorageKey, JSON.stringify(stats));
    }

    function incrementDrillStats(drills) {
      const stats = readDrillStats();
      drills.forEach(exercise => {
        stats[exercise.title] = (stats[exercise.title] || 0) + 1;
      });
      writeDrillStats(stats);
      return stats;
    }

    function adjustDrillStat(title, delta) {
      const stats = readDrillStats();
      stats[title] = Math.max(0, (stats[title] || 0) + delta);
      writeDrillStats(stats);
      renderDrillStats(stats);
    }

    function renderDrillStats(stats = readDrillStats()) {
      const levels = ["Level 1", "Level 2", "Level 3", "Level 4"];
      const rows = practiceItems
        .map((exercise, order) => ({
          title: exercise.title,
          level: exercise.level,
          count: stats[exercise.title] || 0,
          order
        }));
      const maxCount = Math.max(1, ...rows.map(row => row.count));
      const total = rows.reduce((sum, row) => sum + row.count, 0);

      statsTotal.textContent = `${total} total ${total === 1 ? "rep" : "reps"}`;
      statsList.innerHTML = levels.map(level => {
        const levelRows = rows
          .filter(row => row.level === level)
          .sort((first, second) => second.count - first.count || first.order - second.order);
        const levelTotal = levelRows.reduce((sum, row) => sum + row.count, 0);

        return `
          <section class="stat-level-group" aria-label="${level} drill statistics">
            <div class="stat-level-head">
              <h3 class="stat-level-title">${level}</h3>
              <span class="stat-level-total">${levelTotal} ${levelTotal === 1 ? "rep" : "reps"}</span>
            </div>
            <div class="stat-level-list">
              ${levelRows.map(row => {
                const percent = row.count === 0 ? 0 : Math.max(8, Math.round((row.count / maxCount) * 100));
                return `
                  <article class="stat-row">
                    <span class="stat-name">${row.title}</span>
                    <span class="stat-controls" aria-label="${row.title} completions">
                      <button class="stat-button" type="button" data-stat-action="decrease" data-stat-title="${row.title}" aria-label="Decrease ${row.title} completions" ${row.count === 0 ? "disabled" : ""}>-</button>
                      <span class="stat-count" aria-label="${row.count} completions">${row.count}</span>
                      <button class="stat-button" type="button" data-stat-action="increase" data-stat-title="${row.title}" aria-label="Increase ${row.title} completions">+</button>
                    </span>
                    <span class="stat-meter" aria-hidden="true">
                      <span class="stat-meter-fill" style="--stat-percent: ${percent}%"></span>
                    </span>
                  </article>`;
              }).join("")}
            </div>
          </section>`;
      }).join("");
    }

    function todayKey(date = new Date()) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function daysBetween(fromKey, toKey) {
      const from = new Date(`${fromKey}T00:00:00`);
      const to = new Date(`${toKey}T00:00:00`);
      return Math.round((to - from) / 86400000);
    }

    function readStreak() {
      try {
        const data = JSON.parse(storage.get(streakStorageKey));
        if (!data || typeof data !== "object") throw new Error("empty");
        const days = Array.isArray(data.days)
          ? data.days.filter(day => typeof day === "string")
          : [];
        const last = typeof data.last === "string" ? data.last : null;
        if (last && !days.includes(last)) days.push(last);
        return {
          current: Number.isFinite(data.current) ? data.current : 0,
          longest: Number.isFinite(data.longest) ? data.longest : 0,
          last,
          days: [...new Set(days)].sort()
        };
      } catch {
        return { current: 0, longest: 0, last: null, days: [] };
      }
    }

    function writeStreak(streak) {
      storage.set(streakStorageKey, JSON.stringify(streak));
    }

    function normalizeStreakFromDays(streak) {
      const days = [...new Set(streak.days || [])].sort();
      let longest = 0;
      let run = 0;
      let previous = null;

      days.forEach(day => {
        run = previous && daysBetween(previous, day) === 1 ? run + 1 : 1;
        longest = Math.max(longest, run);
        previous = day;
      });

      const today = todayKey();
      const last = days.length ? days[days.length - 1] : null;
      const current = last && daysBetween(last, today) <= 1 ? run : 0;

      return { current, longest, last, days };
    }

    function effectiveStreak() {
      const streak = normalizeStreakFromDays(readStreak());
      if (streak.last && daysBetween(streak.last, todayKey()) > 1) {
        return { ...streak, current: 0 };
      }
      return streak;
    }

    function registerPractice() {
      const streak = normalizeStreakFromDays(readStreak());
      const today = todayKey();
      const hadToday = streak.days.includes(today);

      if (!hadToday) {
        streak.days.push(today);
      }

      const normalized = normalizeStreakFromDays(streak);
      writeStreak(normalized);
      return { streak: normalized, changed: !hadToday };
    }

    function togglePracticeDay(dateKey) {
      const streak = readStreak();
      const days = new Set(streak.days);

      if (days.has(dateKey)) {
        days.delete(dateKey);
      } else {
        days.add(dateKey);
      }

      const normalized = normalizeStreakFromDays({ ...streak, days: [...days] });
      writeStreak(normalized);
      const effective = effectiveStreak();
      renderStreak(effective);
      renderHabitYear(effective);
    }

    function dateKeyForYearDay(year, dayIndex) {
      return todayKey(new Date(year, 0, dayIndex));
    }

    function mondayFirstWeekdayIndex(date) {
      return (date.getDay() + 6) % 7;
    }

    function renderHabitYear(streak) {
      const practicedDays = new Set(streak.days.filter(day => day.startsWith(`${habitYear}-`)));
      const today = todayKey();
      const currentYear = Number(today.slice(0, 4));
      const firstDay = new Date(habitYear, 0, 1);
      const firstDayOffset = mondayFirstWeekdayIndex(firstDay);
      const yearLength = new Date(habitYear, 1, 29).getMonth() === 1 ? 366 : 365;
      const cells = [];

      for (let blank = 0; blank < firstDayOffset; blank++) {
        cells.push('<span class="habit-day" data-state="blank" aria-hidden="true"></span>');
      }

      for (let dayIndex = 1; dayIndex <= yearLength; dayIndex++) {
        const dateKey = dateKeyForYearDay(habitYear, dayIndex);
        const practiced = practicedDays.has(dateKey);
        const isFuture = habitYear > currentYear || (habitYear === currentYear && dateKey > today);
        const isToday = dateKey === today;
        const editable = !isFuture;
        const state = practiced ? "practiced" : isToday ? "today" : isFuture ? "future" : "skipped";
        const label = `${dateKey}: ${practiced ? "practiced" : isFuture ? "future" : "skipped"}`;
        cells.push(`<button class="habit-day" type="button" data-state="${state}" data-editable="${editable}" data-date="${dateKey}" title="${label}" aria-label="${label}" ${editable ? "" : "disabled"}></button>`);
      }

      habitGrid.innerHTML = cells.join("");
    }

    function renderStreak(streak, { celebrate = false } = {}) {
      const active = streak.current > 0;
      streakEl.dataset.active = String(active);
      streakCountEl.textContent = streak.current;

      if (!active) {
        streakUnitEl.textContent = "Start a streak";
      } else {
        streakUnitEl.textContent = "-day streak";
      }

      streakBestEl.textContent = streak.longest > 0 ? `Best ${streak.longest}` : "New here";

      if (celebrate) {
        flameIcon.classList.remove("is-celebrating");
        void flameIcon.offsetWidth;
        flameIcon.classList.add("is-celebrating");
      }
    }

    const sessionPanel = document.getElementById("sessionPanel");
    const sessionButton = document.getElementById("sessionButton");
    const sessionTimer = document.getElementById("sessionTimer");
    const sessionTimeEl = document.getElementById("sessionTime");
    const sessionStatusEl = document.getElementById("sessionStatus");

    const sessionIcons = {
      play: '<svg class="session-button-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
      check: '<svg class="session-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
      restart: '<svg class="session-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.6-6.3"/><path d="M21 4v5h-5"/></svg>'
    };

    let timerId = null;
    let startedAt = 0;
    let elapsedMs = 0;

    function formatDuration(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600);
      const pad = value => String(value).padStart(2, "0");
      return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
    }

    function setSessionButton(state, iconKey, label) {
      sessionButton.dataset.state = state;
      sessionButton.innerHTML = `${sessionIcons[iconKey]}${label}`;
      sessionPanel.dataset.running = String(state === "running");
    }

    function stopTimer() {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function tickTimer() {
      elapsedMs = Date.now() - startedAt;
      sessionTimeEl.textContent = formatDuration(elapsedMs);
    }

    function resetSession() {
      stopTimer();
      elapsedMs = 0;
      sessionTimer.hidden = true;
      sessionTimeEl.textContent = "00:00";
      sessionStatusEl.textContent = "Drills picked. Start when your pen is ready.";
      setSessionButton("ready", "play", "Start practice");
    }

    function startSession() {
      sessionTimer.hidden = false;
      startedAt = Date.now();
      elapsedMs = 0;
      tickTimer();
      stopTimer();
      timerId = setInterval(tickTimer, 1000);
      sessionStatusEl.textContent = "Practice is running. Stay with the reps.";
      setSessionButton("running", "check", "Finish practice");
    }

    function finishSession() {
      stopTimer();
      tickTimer();
      sessionTimer.hidden = false;
      const duration = formatDuration(elapsedMs);
      setSessionButton("done", "restart", "Start again");
      renderDrillStats(incrementDrillStats(currentDrills));

      const { streak, changed } = registerPractice();
      renderStreak(streak, { celebrate: changed });
      renderHabitYear(streak);

      if (changed) {
        const cheer = streak.current === 1 ? "Streak started." : `${streak.current} days in a row.`;
        sessionStatusEl.textContent = `Logged ${duration}. ${cheer}`;
      } else {
        sessionStatusEl.textContent = `Logged another ${duration}. Today was already counted.`;
      }
    }

    pickButton.addEventListener("click", () => {
      const picks = renderDrills();
      if (picks.length > 0) {
        sessionPanel.hidden = false;
        resetSession();
      } else {
        stopTimer();
        currentDrills = [];
        sessionPanel.hidden = true;
      }
    });

    sessionButton.addEventListener("click", () => {
      if (sessionButton.dataset.state === "running") {
        finishSession();
      } else {
        startSession();
      }
    });

    levelButtons.forEach(levelButton => {
      levelButton.addEventListener("click", () => {
        const isPressed = levelButton.getAttribute("aria-pressed") === "true";
        levelButton.setAttribute("aria-pressed", String(!isPressed));
        storeSelectedLevels();
      });
    });

    countButtons.forEach(countButton => {
      countButton.addEventListener("click", () => {
        setDrillCount(Number(countButton.dataset.count));
      });
    });

    weaknessButton.addEventListener("click", () => {
      setWeaknessMode(!weaknessModeEnabled());
    });

    statsList.addEventListener("click", event => {
      const statButton = event.target.closest(".stat-button");
      if (!statButton) return;
      const delta = statButton.dataset.statAction === "increase" ? 1 : -1;
      adjustDrillStat(statButton.dataset.statTitle, delta);
    });

    habitGrid.addEventListener("click", event => {
      const dayButton = event.target.closest(".habit-day[data-editable=\"true\"]");
      if (!dayButton) return;
      togglePracticeDay(dayButton.dataset.date);
    });

    restoreSelectedLevels();
    restoreWeaknessMode();
    restoreDrillCount();
    const initialStreak = effectiveStreak();
    renderStreak(initialStreak);
    renderHabitYear(initialStreak);
    renderDrillStats();
