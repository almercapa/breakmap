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
        st.setAttribute("font-size", 11);
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

createNode("Global Dependencies", "Down-Bounce · V-Path · Center-Line · Arm Logic", 465, 40);
createNode("Indian Step", "", 24, 200);
createLine(600, 140, 159, 200);
createNode("March Step", "", 318, 200);
createLine(600, 140, 453, 200);
createNode("Cross Step", "", 612, 200);
createLine(600, 140, 747, 200);
createNode("Salsa Step", "", 906, 200);
createLine(600, 140, 1041, 200);