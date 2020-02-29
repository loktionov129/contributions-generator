class AppModel {
    getContributions() {
        return Array.from(Array(53))
            .map((_, i) => {
                return {
                    translate: 14 * i,
                    rects: Array.from(Array(7))
                        .map((_, j) => ({
                            color: '#ebedf0',
                            x: 14 - i,
                            y: 13 * j,
                            height: 10,
                            width: 10
                        }))
                };
            });
    }
}

module.exports = AppModel;
