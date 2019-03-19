/*jshint esversion: 6 */
// ██╗      █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗  ██████╗ ███████╗
// ██║     ██╔══██╗████╗  ██║██╔════╝ ██║   ██║██╔══██╗██╔════╝ ██╔════╝
// ██║     ███████║██╔██╗ ██║██║ ████╗██║   ██║███████║██║ ████╗█████╗
// ██║     ██╔══██║██║╚██╗██║██║   ██║██║   ██║██╔══██║██║   ██║██╔══╝
// ███████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
// language file for https://stake.hey.network
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
		"whatishey": {
			"fr": "Qu'est ce que Hey?",
			"en": "What is Hey?",
			"jp": "ちょっと何ですか？",
			"pl": "Czym jest Hey?"
		},
		"premiumForLife": {
			"fr": "Premium à vie",
			"en": "Premium for life",
			"jp": "人生のためのプレミアム",
			"pl": "Premium - na całe życie"
		},
		"forTheFirst": {
			"fr": "Pour le premier Million d'inscrits",
			"en": "for first 1M users",
			"jp": "最初の100万人のユーザー向け",
			"pl": "dla pierwszego miliona użytkowników"
		},
		"title": {
			"fr": "Délégez vos <span class=\"grad\">LOOM</span> et <span class=\"grad\">gagnez en encore plus</span>",
			"en": "Delegate <span class=\"grad\">LOOM</span> and <span class=\"grad\">earn rewards</span>",
			"jp": "<span class=\"grad\">#ハッシュ</span> と <span class=\"grad\">トレンドトピックでチャット</span>",
			"pl": "Delegat <span class=\"grad\">LOOM</span> - <span class=\"grad\">zdobywaj nagrody</span>"
		},
		"nfo": {
			"fr": "Un jeu d'enfant, en 3 minutes, rentabilisez vos LOOM tant qu'il ne sont pas encore utiles.",
			"en": "Nothing is easier, it only takes 3 minutes, make profit out of your LOOMs while you can't do anything with them so far.",
			"jp": "簡単なことは何もありません、それは3分しかかかりません、あなたがこれまでのところ彼らと何もすることができない間あなたの織機から利益を得ます",
			"pl": "To bardzo łatwe i zajmuje tylko 3 minuty! Zarabiaj dzięki swoim tokenom LOOM"
		},
		"stake": {
			"fr": "Stakez vos LOOM",
			"en": "Stake with us!",
			"jp": "私たちとステーク",
			"pl": "Zarabiaj z nami"
		},
		"telegram": {
			"fr": "Rejoindre sur Telegram",
			"en": "Join us on Telegram",
			"jp": "Telegram で私たちに参加",
			"pl": "Dołącz do nas na Telegramie"
		},
		"join": {
			"fr": "Rejoignez nous sur Telegram pour poser des questions ou nous rencontrer: <span class=\"fluo\">#StakeHeyNetwork</span>",
			"en": "Hey Loomers ! We, at <span class=\"fluo\">#Hey</span>, are almost ready to give you tons of information about <span class=\"fluo\">#Loom</span>, <span class=\"fluo\">#Staking</span> and <span class=\"fluo\">#Rewards</span>. Put your Looms at use and make some returns!",
			"jp": "<span class=\"fluo\">#HeyNetwork</span> のディスカッションに参加しましょう",
			"pl": "Hej Loomersi! My w <span class=\"fluo\">#Hey</span> jesteśmy prawie gotowi by dostarczyć wam informacje <span class=\"fluo\">#Loom</span>, <span class=\"fluo\">#Zarobek</span> i <span class=\"fluo\">#Nagrody</span>. Wykorzystaj swoje tokeny LOOM by dzięki nim zarabiać!"
		},
		"footer": {
			"copyright": {
				"fr": "Copyright",
				"en": "Copyright",
				"jp": "著作権",
				"pl": "Prawa autorskie"
			},
			"rights": {
				"fr": "Tous droits réservés.",
				"en": "All rights Reserved.",
				"jp": "全著作権所有",
				"pl": "Wszelkie prawa zastrzeżone."
			},
			"aboutUs": {
				"fr": "A propos",
				"en": "About us",
				"jp": "私たちに関しては",
				"pl": "O nas"
			},
			"manifesto": {
				"fr": "Manifesto",
				"en": "Manifesto",
				"jp": "マニフェスト",
				"pl": "Manifest"
			},
			"support": {
				"fr": "Support",
				"en": "Support",
				"jp": "補助",
				"pl": "Wsparcie"
			},
			"contactUs": {
				"fr": "Contactez-nous",
				"en": "Contact us",
				"jp": "お問い合わせ",
				"pl": "Kontakt"
			},
			"stakingGuide": {
				"fr": "Guide de <em>Staking</em>",
				"en": "Staking Guide",
				"jp": "<em>Staking</em>ガイド",
				"pl": "Przewodnik - jak zarabiać"
			},
			"website": {
				"fr": "Site web Hey",
				"en": "Hey website",
				"jp": "<em>Hey</em> ウェブサイト",
				"ok": "Strona Hey"
			},
			"dashboard": {
				"fr": "Tableau de bord",
				"en": "Dashboard",
				"jp": "計器盤",
				"pl": "Panel"
			}
		}
	}
};
