
// 单例模式    实质上就是起到一个存储全局变量的作用，其他的类和模块只能通过该类提供的接口修改其唯一实例
var Boss = (function() {
  function Boss(){
    this.hp = 1000;
  }
  Boss.prototype.getInjured = function(harm){
    this.hp -= harm;
  }
  Boss.prototype.getHp = function(){
    return this.hp;
  }
  Boss.getInstance = function(){
    if(!this.instance){
      this.instance = new Boss();
    } 
    return this.instance;
  }
  // Boss.instance = null;
  return Boss;
})();

var Player = (function() {
  function Player(name){
    this.name = name;
  }
  Player.prototype.attack = function(harm, boss){
    boss.getInjured(harm);
    console.log(`我是${this.name}, 我对boss造成了${harm}点伤害`)
    if(boss.getHp() <= 0){
      boss.hp = 0;
      console.log('boss 被击败了');
    }
  }
  return Player;
})();

var p1 = new Player('剑圣');
var p2 = new Player('刺客');
var p3 = new Player('法师');


p1.attack(12, Boss.getInstance());
p2.attack(200, Boss.getInstance());
p3.attack(12000, Boss.getInstance());

console.log(Boss.getInstance().getHp());


// 策略模式 为实现某种功能而采取不同的策略算法

var MiracleDeck = (function (){
  function MiracleDeck (){
    this.name = '奇迹贼';
  }
  MiracleDeck.prototype.show = function(){
    console.log("开始我的表演")
  }
  return MiracleDeck;
})()

var ExplosiveDeck = (function(){
  function ExplosiveDeck(){
    this.name = '爆牌贼';
  }
  ExplosiveDeck.prototype.show = function(){
    console.log('爆别人的牌，让别人无牌可用');
  }
  return ExplosiveDeck;
})();

var Robber = (function(){
  function Robber(){
    
  }
  Robber.prototype.setDeck = function(deck){
    this.deck = deck;
  }
  Robber.prototype.winTheGame = function (){
    this.deck.show();
  }
  return Robber;
})();

var robber = new Robber();
robber.setDeck(new MiracleDeck());
robber.winTheGame();
robber.setDeck(new ExplosiveDeck());
robber.winTheGame();



// 代理模式  为一个对象提供一个代理者，以便控制对它的访问
var Manager = (function(){
  function Manager(){
    
  }
  Manager.prototype.play = function(){
    console.log('开始打比赛')
  }
  return Manager;
})();

var Coach = (function(){
  function Coach(){
    this.manager = new Manager();
  }
  Coach.prototype.beforePlay = function(){
    console.log('布置战术');
    console.log('球队训话');
  }
  Coach.prototype.afterplay = function(){
    console.log('赛后采访');
  }
  Coach.prototype.play = function(){
    this.beforePlay();
    this.manager.play();
    this.afterplay();
  }
  return Coach;
})();

var proxy = new Coach();
proxy.play();


// 发布订阅模式

var EventEmitter = (function(){
  function EventEmitter(){
    this.events = {};
    this.key = 0;
  }
  EventEmitter.prototype.on = function(name, event){
    event.key = ++this.key;
    if(!this.events[name]) {
      this.events[name] = []; 
    } 
    this.events[name].push(event);
    return this.key;
  }
  EventEmitter.prototype.off = function(name, key){
    if(this.events[name] && typeof key == 'number'){
      this.events[name].filter(e => e.key !== key);
      return false;
    }  
    this.events[name] = [];
  }
  EventEmitter.prototype.emit = function(name, key){
    if(this.events[name].length === 0){
      throw Error('')
    }
    if(typeof key === 'number'){
      console.log('this1' ,this)
      this.events[name].forEach(x => x.key === key && x());
    } else {
      this.events[name].forEach(x => x());
    }
  }
  return EventEmitter;
})();

var em = new EventEmitter();
const friendDiedId1 = em.on('friendDied', function(){
  console.log('队友1死亡');
})
const friendDiedId2 = em.on('friendDied', function(){
  console.log('队友2死亡');
})
const enemyDiedId1 = em.on('enemyDied', function(){
  console.log('敌人1死亡');
})
const enemyDiedId2 = em.on('enemyDied', function(){
  console.log('敌人2死亡');
})
em.emit('friendDied', friendDiedId1);
// em.emit('enemyDied', enemyDiedId2);
// em.emit('enemyDied', 10);