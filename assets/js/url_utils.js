const host_dict = {
    "1431": "114.116.14.31",
    "34252": "123.249.34.252",
    "asus": "bytedance.asuscomm.com",
};

function open_url(host, port, type = "http") {
    const real_host = host_dict[host] || host;
    const url = `${type}://${real_host}:${port}`;
    window.open(url, "_blank");
}
