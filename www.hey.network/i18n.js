/*jshint esversion: 6 */
// ██╗      █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗  ██████╗ ███████╗
// ██║     ██╔══██╗████╗  ██║██╔════╝ ██║   ██║██╔══██╗██╔════╝ ██╔════╝
// ██║     ███████║██╔██╗ ██║██║ ████╗██║   ██║███████║██║ ████╗█████╗
// ██║     ██╔══██║██║╚██╗██║██║   ██║██║   ██║██╔══██║██║   ██║██╔══╝
// ███████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
// language file for https://hey.network
/*
|  # FORMAT
|  language code format: ISO 639-1
|  refer to this list: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
|
|  # INSTRUCTIONS
|  you can either submit a pull request (highly preferred)
|  or send a translation file to this email address: nab@hey.network
|  1. Add you language name in the first object (LANGUAGES_LIST). Please
|  use the ISO 639-1 language code (link provided above)
|  2. Translate every sub object. You have some examples, follow the lead,
|  You should be fine. If you have any question, ask us on our Hey page.
|  3. Don't have Hey yet? Get it on https://hey.network
|  Join the chat on hey.network
|
*/

const LANGUAGES_LIST = {
	"en": "English",
	"fr": "Français",
	"jp": "日本語",
	"cn": "华语",
	"pl": "Polski"
};
const txt = {
	"general": {
		"confirm": {
			"fr": "OK",
			"en": "OK",
			"jp": "OK",
			"pl": "OK"
		},
		"cancel": {
			"fr": "Annuler",
			"en": "Cancel",
			"jp": "キャンセル",
			"pl": "Anuluj"
		}
	},
	"home": {
		"start": {
			"fr": "S'inscrire",
			"en": "Start",
			"jp": "開始",
			"pl": "Start"
		},
		"premiumForLife": {
			"fr": "Premium à vie",
			"en": "Premium for life",
			"jp": "人生のためのプレミアム",
			"pl": "Premium dożywotnio"
		},
		"forTheFirst": {
			"fr": "Pour le premier Million d'inscrits",
			"en": "for first 1M users",
			"jp": "最初の100万人のユーザー向け",
			"pl": "dla pierwszego miliona użytkowników"
		},
		"chat": {
			"fr": "Chattez par <span class=\"grad\">#hashtag</span> et <span class=\"grad\">sujets tendance</span>",
			"en": "Chat by <span class=\"grad\">#hashtag</span> and <span class=\"grad\">trending topic</span>",
			"jp": "<span class=\"grad\">#ハッシュ</span> と <span class=\"grad\">トレンドトピックでチャット</span>",
			"pl": "Czatuj przez <span class=\"grad\">#hashtag</span>, <span class=\"grad\">trendy</span>"
		},
		"chatNfo": {
			"fr": "Choisissez votre chat et rencontrez des influenceurs, des joueurs, des célébrités et nouveau amis.",
			"en": "Choose your chat and connect with influencers, gamers, celebrities, and peers.",
			"jp": "あなたのチャットを選択し、インフルエンサー、ゲーマー、有名人、そして仲間とつながりましょう。",
			"pl": "Wybierz czat i połącz się z ludźmi wpływu, graczami, celebrytami i rówieśnikami."
		},
		"join": {
			"fr": "Rejoignez la discussion sur <span class=\"fluo\">#HeyNetwork</span>",
			"en": "Join the discussion on <span class=\"fluo\">#HeyNetwork</span>",
			"jp": "<span class=\"fluo\">#HeyNetwork</span> のディスカッションに参加しましょう",
			"pl": "Dołącz do dyskusji na <span class=\"fluo\">#HeyNetwork</span>"
		},
		"choose": {
			"fr": "Choisissez votre <span class=\"fluo\">#hashtag</span>,",
			"en": "Choose your<br /><span class=\"grad\">#hashtag</span>,",
			"jp": "<span class=\"grad\">＃ハッシュタグ</span><br />を選択してください,",
			"pl": "Wybierz swój<br /><span class=\"grad\">#hashtag</span>,"
		},
		"chooseNfo": {
			"fr": "Rejoingez un chat, découvrez du nouveau contenu, suivez vos amis, inscrivez vous aux #hashtags, et gagnez votre reputation.",
			"en": "Join the chat, discover new content, follow peers, subscribe to #hashtags, and earn a reputation.",
			"jp": "チャットに参加し、新しいコンテンツを発見し、仲間をフォローし、＃ハッシュタグを購読し、そして評判を獲得しましょう。",
			"pl": "Dołącz do czatu, odkrywaj nowe treści, śledź rówieśników, subskrybuj #hashtagi i zdobywaj reputację."
		},
		"premium": {
			"fr": "PREMIUM",
			"en": "PREMIUM",
			"jp": "プレミアム",
			"pl": "PREMIUM"
		},
		"adfree": {
			"fr": "Zero <span class=\"grad\">publicité</span>",
			"en": "Go <span class=\"grad\">ad-free</span>",
			"jp": "広告無料",
			"pl": "<span class=\"grad\">Bez reklam</span>"
		},
		"adfreeNfo": {
			"fr": "We're offering ad-free premium for life to our first 1 million users. We're growing fast, so hop to it! Invite your family, friends, frenemies by clicking here.",
			"en": "We're offering ad-free premium for life to our first 1 million users. We're growing fast, so hop to it! Invite your family, friends, frenemies by clicking here.",
			"jp": "私たちは最初の100万人のユーザーに生涯広告なしのプレミアムを提供しています。私たちは急成長しているので、それに飛び乗ってください！ここをクリックしてあなたの家族、友人、熱狂を誘ってください。",
			"pl": "Oferujemy dożywotnio premium bez reklam dla pierwszego miliona naszych użytkowników. Szybko się rozwijamy - Dołącz do nas! Zaproś rodzinę i przyjaciół klikając tutaj."
		},
		"earn": {
			"fr": "Gagnez des <em>Coins</em>",
			"en": "Earn coins",
			"jp": "コインを稼ぐ",
			"pl": "Zdobywaj <em>Monety</em>"
		},
		"earnNfo": {
			"fr": "Gain likes and comments on your posts or refer users, then access bonus GIFs, tip friends, and unlock other premium privileges.",
			"en": "Gain likes and comments on your posts or refer users, then access bonus GIFs, tip friends, and unlock other premium privileges.",
			"jp": "あなたの投稿に「いいね」や「コメント」を追加したり、ユーザーを紹介したりしてから、ボーナスGIFにアクセスしたり、友達を紹介したり、他のプレミアム特典を解除したりできます。",
			"pl": "Zdobywaj lajki i komentarze na temat swoich postów lub polecaj użytkowników a następnie ozyskaj dostęp do bonusowych GIFów, wysyłaj napiwki znajomym i odblokuj inne przywileje premium."
		},
		"buy": {
			"fr": "Achetez des Coins",
			"en": "Buy Coins",
			"jp": "コインを買う",
			"pl": "Kup monety"
		},
		"install": {
			"fr": "Installez l'<span class=\"fluo\">App</span> maintenant!",
			"en": "Download the <span class=\"fluo\">App</span> now!",
			"jp": "今すぐア<span class=\"fluo\">プリを</span>ダウンロード！",
			"pl": "Pobierz <span class=\"fluo\">Aplikację</span> teraz!"
		},
		"footer": {
			"copyright": {
				"fr": "Copyright",
				"en": "Copyright",
				"jp": "著作権",
				"cn": "版权",
				"pl": "Prawa autorskie"
			},
			"rights": {
				"fr": "Tous droits réservés.",
				"en": "All rights Reserved.",
				"jp": "全著作権所有",
				"cn": "版权所有。",
				"pl": "Wszelkie prawa zastrzeżone."
			},
			"aboutUs": {
				"fr": "A propos",
				"en": "About us",
				"jp": "私たちに関しては",
				"cn": "关于我们",
				"pl": "O nas"
			},
			"manifesto": {
				"fr": "Manifesto",
				"en": "Manifesto",
				"jp": "マニフェスト",
				"cn": "宣言",
				"pl": "Manifest"
			},
			"validator": {
				"fr": "Validator LOOM",
				"en": "LOOM Validator",
				"jp": "LOOM Validator",
				"cn": "",
				"pl": "Walidator LOOM"
			},
			"support": {
				"fr": "Support",
				"en": "Support",
				"jp": "補助",
				"cn": "客服",
				"pl": "Wsparcie"
			},
			"apps": {
				"fr": "Applications",
				"en": "Apps",
				"jp": "アプリケーション",
				"cn": "",
				"pl": "Aplikacje"
			},
			"contactUs": {
				"fr": "Contactez-nous",
				"en": "Contact us",
				"jp": "お問い合わせ",
				"cn": "联系我们",
				"pl": "Kontakt"
			},
			"buy": {
				"fr": "Acheter des Coins",
				"en": "Buy Coins",
				"jp": "コインを買う",
				"cn": "",
				"pl": "Kup monety"
			},
			"stakingGuide": {
				"fr": "Guide de <em>Staking</em>",
				"en": "Staking Guide",
				"jp": "<em>Staking</em>ガイド",
				"cn": "权益代币的指南",
				"pl": "Przewodnik - jak zarabiać"
			},
			"website": {
				"fr": "Site web Hey",
				"en": "Hey website",
				"jp": "<em>Hey</em> ウェブサイト",
				"cn": "<em>Hey</em>网站",
				"ok": "Strona Hey"
			},
			"dashboard": {
				"fr": "Tableau de bord",
				"en": "Dashboard",
				"jp": "計器盤",
				"cn": "仪表盘",
				"pl": "Panel"
			}
		}
	},
};
