function createNode(title, subtitle, x, y) {
    const svg = document.querySelector("#roadmap")
    box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    box.setAttribute("x", x);
    box.setAttribute("y", y);
    box.setAttribute("width", 270);
    box.setAttribute("height", 100);
    box.setAttribute("fill", "black");
    svg.appendChild(box);
    t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.textContent = title;
    t.setAttribute("font-size", 20)
    t.setAttribute("fill", "white");
    t.setAttribute("x", (x + 135));
    t.setAttribute("y", (y + 50));
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("dominant-baseline", "middle");
    svg.appendChild(t);
    if (subtitle != "") {
        st = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        st.textContent = subtitle;
        st.setAttribute("x", (x + 135));
        st.setAttribute("dy", "2em");
        st.setAttribute("font-size", 13);
        t.setAttribute("y", (y + 40));
        t.appendChild(st);
    }
}

function createLine(x1, y1, x2, y2) {
    const svg = document.querySelector("#roadmap")
    line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    mid = (y1 + y2) / 2;
    line.setAttribute("d", `M ${x1} ${y1} L ${x1} ${mid} L ${x2} ${mid} L ${x2} ${y2}`);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
}

// Canvas: 1500px wide
// Node width: 270px, spacing: 294px between node starts
// 4 nodes centered: total width = 3*294+270 = 1152, padding = (1500-1152)/2 = 174
// 5 nodes centered: total width = 4*294+270 = 1446, padding = (1500-1446)/2 = 27

const cx = 750;
const headerX = cx - 135; // 615

// Section I
createNode("Global Dependencies", "Down-Bounce · V-Path · Center-Line · Arm Logic", headerX, 40);
createLine(cx, 140, cx, 240);

// Section II header
createNode("Standard Library", "Complete ALL before continuing", headerX, 240);

// Section II moves — 4 nodes, start x=174
createNode("Indian Step", "", 174, 440);
createNode("March Step", "", 468, 440);
createNode("Cross Step", "", 762, 440);
createNode("Salsa Step", "", 1056, 440);

// Standard Library → moves
createLine(cx, 340, 309, 440);
createLine(cx, 340, 603, 440);
createLine(cx, 340, 897, 440);
createLine(cx, 340, 1191, 440);

// moves → Flavor & Logic
createLine(309, 540, cx, 640);
createLine(603, 540, cx, 640);
createLine(897, 540, cx, 640);
createLine(1191, 540, cx, 640);

// Section III header
createNode("Flavor & Logic", "Complete at your own pace", headerX, 640);
createLine(cx, 740, cx, 840);

// Section III moves — 5 nodes, start x=27
createNode("Heel Toe", "", 27, 840);
createNode("Brooklyn Rock", "", 321, 840);
createNode("Battle Rock", "", 615, 840);
createNode("Charleston", "", 909, 840);
createNode("Bronx Step", "", 1203, 840);

// Flavor & Logic → moves
createLine(cx, 740, 162, 840);
createLine(cx, 740, 456, 840);
createLine(cx, 740, 750, 840);
createLine(cx, 740, 1044, 840);
createLine(cx, 740, 1338, 840);

// Bronx Step → Hustle Step (one level below)
createNode("Hustle Step", "", 1203, 1040);
createLine(1338, 940, 1338, 1040);

// moves → Go-Down Library
createLine(162, 940,cx, 1240);
createLine(456, 940, cx, 1240);
createLine(750, 940, cx, 1240);
createLine(1044, 940, cx, 1240);
createLine(1338, 1140, cx, 1240);

// Section IV
createNode("The Go-Down Library", "Rotational · Vertical · High-Tension", headerX, 1240);