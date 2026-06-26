const cx = 1000;
const headerX = 865;

function createNode(title, subtitle, x, y, svgID) {
    const svg = document.querySelector("#" + svgID)
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

function createLine(x1, y1, x2, y2, svgID) {
    const svg = document.querySelector("#" + svgID)
    line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    mid = (y1 + y2) / 2;
    line.setAttribute("d", `M ${x1} ${y1} L ${x1} ${mid} L ${x2} ${mid} L ${x2} ${y2}`);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
}

function showPath(id) {
    const paths = document.querySelectorAll(".path");
    for (let i = 0; i < paths.length; i++) {
        paths[i].style.display = "none";
    }
    const show = document.querySelector("#" + id);
    show.style.display = ""
}