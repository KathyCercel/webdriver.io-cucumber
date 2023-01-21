const setUpStickyTop = (context, stickyTopIndividuals) => {
    Object.keys(stickyTopIndividuals).forEach(key => {
        context[key] = stickyTopIndividuals[key];
    })
}

class StickyTop {
    constructor(stickyTopColumns){
        this.rankColumnTitle = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.name = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.price = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.oneHourPercent = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.twentyFourHoursPercent = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.sevenDaysPercent = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.marketCap = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.volumeTwentyFourHours = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.circulatingSupply = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';
        this.lastSevenDays = 'p[class*="sc-e225a64a-0 fIxZAt rank-column-title"]';

        setUpStickyTop(this, stickyTopColumns);
    }


}

module.exports = new StickyTop();