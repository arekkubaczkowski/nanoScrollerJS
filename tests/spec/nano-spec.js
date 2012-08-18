// Generated by CoffeeScript 1.3.3

describe("nanoScroller", function() {
  var $content, $nano, $pane, $slider, height;
  $nano = null;
  $content = null;
  $pane = null;
  $slider = null;
  height = null;
  jasmine.getFixtures().fixturesPath = 'spec/fixtures';
  describe("when the plugin is called without any options and there is content", function() {
    beforeEach(function() {
      loadFixtures('nano-content.html');
      $nano = $("#nano");
      return $nano.nanoScroller();
    });
    describe("content element", function() {
      beforeEach(function() {
        return $content = $nano.find('.content');
      });
      it("should exist", function() {
        expect($content).toExist();
        expect($content.length).toBeTruthy();
        return expect($nano).toContain("div.content");
      });
      it("should have tabindex attribute set", function() {
        return expect($content).toHaveAttr('tabindex');
      });
      return it("should have a height of 200px", function() {
        return expect($content.height()).toEqual(200);
      });
    });
    describe("pane element", function() {
      beforeEach(function() {
        return $pane = $nano.find('.pane');
      });
      it("should exist", function() {
        expect($pane).toExist();
        expect($pane.length).toBeTruthy();
        return expect($nano).toContain("div.pane");
      });
      return it("should have a height of 200px", function() {
        return expect($pane.height()).toEqual(200);
      });
    });
    describe("slider element", function() {
      beforeEach(function() {
        return $slider = $nano.find('.slider');
      });
      it("should exist", function() {
        expect($slider).toExist();
        expect($slider.length).toBeTruthy();
        return expect($nano).toContain("div.slider");
      });
      return it("should have style attribute set", function() {
        return expect($slider).toHaveAttr('style');
      });
    });
    describe("calling $('.nano').nanoScroller({ scroll: 'top' })", function() {
      beforeEach(function() {
        $nano.nanoScroller({
          scroll: 'top'
        });
        return $slider = $nano.find('.slider');
      });
      return it("should have set .slider CSS 'top' value to 0px", function() {
        return expect($slider).toHaveCss({
          top: '0px'
        });
      });
    });
    return describe("calling $('.nano').nanoScroller({ scroll: 'bottom' })", function() {
      beforeEach(function() {
        $nano.nanoScroller({
          scroll: 'bottom'
        });
        $slider = $nano.find('.slider');
        return height = $nano.find('.content').height() - $slider.height();
      });
      return it("should have set .slider CSS 'top' value to (content height - slider height)", function() {
        return expect($slider).toHaveCss({
          top: height + 'px'
        });
      });
    });
  });
  return describe("when the plugin is called without any options and there is no content", function() {
    beforeEach(function() {
      loadFixtures('nano-no-content.html');
      $nano = $("#nano");
      return $nano.nanoScroller();
    });
    describe("content element", function() {
      beforeEach(function() {
        return $content = $nano.find('.content');
      });
      it("should exist", function() {
        expect($content).toExist();
        expect($content.length).toBeTruthy();
        return expect($nano).toContain("div.content");
      });
      it("should have tabindex attribute set", function() {
        return expect($content).toHaveAttr('tabindex');
      });
      return it("should have a height of 200px", function() {
        return expect($content.height()).toEqual(200);
      });
    });
    describe("pane element", function() {
      beforeEach(function() {
        return $pane = $nano.find('.pane');
      });
      it("should exist", function() {
        expect($pane).toExist();
        expect($pane.length).toBeTruthy();
        return expect($nano).toContain("div.pane");
      });
      it("should have a height of 200px", function() {
        return expect($pane.height()).toEqual(200);
      });
      return it("should be hidden with 'display: none'", function() {
        return expect($pane.css('display')).toEqual('none');
      });
    });
    describe("slider element", function() {
      beforeEach(function() {
        return $slider = $nano.find('.slider');
      });
      it("should exist", function() {
        expect($slider).toExist();
        expect($slider.length).toBeTruthy();
        return expect($nano).toContain("div.slider");
      });
      return it("should have style attribute set", function() {
        return expect($slider).toHaveAttr('style');
      });
    });
    return describe("calling $('.nano').nanoScroller({ scroll: 'bottom' })", function() {
      beforeEach(function() {
        $nano.nanoScroller({
          scroll: 'bottom'
        });
        $slider = $nano.find('.slider');
        return height = $nano.find('.content').height() - $slider.height();
      });
      return it("should not have set .slider CSS 'top' value to (content height - slider height)", function() {
        return expect($slider).not.toHaveCss({
          top: height + 'px'
        });
      });
    });
  });
});